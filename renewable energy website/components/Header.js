import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">Renewable Energy</Link>
        <nav>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/shop" className="mr-4">Shop</Link>
          <Link href="/booking" className="mr-4">Booking</Link>
          <Link href="/cart" className="mr-4">Cart</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
