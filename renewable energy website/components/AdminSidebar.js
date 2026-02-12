import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav>
          <Link href="/admin" className="block py-2 px-4 hover:bg-gray-700">Dashboard</Link>
          <Link href="/admin/products" className="block py-2 px-4 hover:bg-gray-700">Products</Link>
          <Link href="/admin/orders" className="block py-2 px-4 hover:bg-gray-700">Orders</Link>
          <Link href="/admin/bookings" className="block py-2 px-4 hover:bg-gray-700">Bookings</Link>
        </nav>
      </div>
    </aside>
  );
}
