import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Renewable Energy Solutions</title>
        <meta name="description" content="Leading provider of renewable energy products and services" />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
