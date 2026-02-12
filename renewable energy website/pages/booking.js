import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit to API
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (res.ok) {
      alert('Booking submitted successfully!');
    }
  };

  return (
    <div>
      <Head>
        <title>Book Installation/Maintenance - Renewable Energy</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Book Installation or Maintenance</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <select name="service" onChange={handleChange} required className="w-full mb-4 p-2 border">
            <option value="">Select Service</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
          </select>
          <input type="date" name="date" onChange={handleChange} required className="w-full mb-4 p-2 border" />
          <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full mb-4 p-2 border"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Booking</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
