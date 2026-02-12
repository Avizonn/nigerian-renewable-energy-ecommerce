import connectDB from '../../../lib/db';
import Booking from '../../../models/Booking';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const bookings = await Booking.find({});
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else if (req.method === 'POST') {
    try {
      const booking = new Booking(req.body);
      await booking.save();
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
