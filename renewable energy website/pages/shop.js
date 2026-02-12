import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Shop({ products }) {
  return (
    <div>
      <Head>
        <title>Shop - Renewable Energy Products</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products?.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch products from API
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();
  return { props: { products } };
}
