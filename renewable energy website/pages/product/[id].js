import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductDetail({ product }) {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{product?.name} - Renewable Energy</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={product?.image} alt={product?.name} className="w-full" />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
            <p className="text-xl text-green-600 mb-4">${product?.price}</p>
            <p className="mb-4">{product?.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch product IDs
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();
  const paths = products.map(product => ({ params: { id: product.id.toString() } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const product = await res.json();
  return { props: { product } };
}
