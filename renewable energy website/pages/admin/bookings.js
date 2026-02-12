import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdminSidebar from '../../components/AdminSidebar';

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/bookings')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`/api/bookings/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
  };

  return (
    <div>
      <Head>
        <title>Manage Bookings - Admin</title>
      </Head>
      <Header />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-8">Manage Bookings</h1>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2">Booking ID</th>
                <th className="border p-2">Customer</th>
                <th className="border p-2">Service</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td className="border p-2">{booking.id}</td>
                  <td className="border p-2">{booking.name}</td>
                  <td className="border p-2">{booking.service}</td>
                  <td className="border p-2">{booking.date}</td>
                  <td className="border p-2">{booking.status}</td>
                  <td className="border p-2">
                    <select value={booking.status} onChange={(e) => updateStatus(booking.id, e.target.value)}>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      <Footer />
    </div>
  );
}
