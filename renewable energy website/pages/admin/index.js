import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdminSidebar from '../../components/AdminSidebar';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: 0, orders: 0, bookings: 0 });

  useEffect(() => {
    // Fetch dashboard stats
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Admin Dashboard - Renewable Energy</title>
      </Head>
      <Header />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold">Products</h2>
              <p className="text-2xl">{stats.products}</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold">Orders</h2>
              <p className="text-2xl">{stats.orders}</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold">Bookings</h2>
              <p className="text-2xl">{stats.bookings}</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
