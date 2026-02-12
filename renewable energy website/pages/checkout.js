import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Checkout({ cart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'paystack'
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process payment and create order
    const orderData = { ...formData, items: cart, total };
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    if (res.ok) {
      alert('Order placed successfully!');
      // Clear cart and redirect
    }
  };

  return (
    <div>
      <Head>
        <title>Checkout - Renewable Energy</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 border" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border" />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="w-full p-2 border" />
            <input type="text" name="city" placeholder="City" onChange={handleChange} required className="w-full p-2 border" />
            <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} required className="w-full p-2 border" />
            <select name="paymentMethod" onChange={handleChange} className="w-full p-2 border">
              <option value="paystack">Paystack</option>
              <option value="cash">Cash on Delivery</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Place Order</button>
          </form>
          <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2">
              <span className="font-bold">Total: ${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
