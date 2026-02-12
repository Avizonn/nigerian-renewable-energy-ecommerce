import connectDB from '../../lib/db';
import Order from '../../models/Order';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connectDB();

  const event = req.body;

  if (event.event === 'charge.success') {
    const { reference } = event.data;
    // Update order status based on reference
    await Order.findOneAndUpdate({ reference }, { status: 'paid' });
  }

  res.status(200).json({ received: true });
}
