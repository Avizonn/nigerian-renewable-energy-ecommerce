import connectDB from '../../../lib/db';
import Order from '../../../models/Order';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const orders = await Order.find({});
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else if (req.method === 'POST') {
    try {
      const order = new Order(req.body);
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
