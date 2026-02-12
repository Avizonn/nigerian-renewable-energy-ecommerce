import Head from 'next/head';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

export default function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <Head>
        <title>Cart - Renewable Energy</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
            ))}
            <div className="mt-8">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Proceed to Checkout</button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
