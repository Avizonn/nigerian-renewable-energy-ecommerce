import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  return <Component {...pageProps} cart={cart} setCart={setCart} />;
}

export default MyApp;
