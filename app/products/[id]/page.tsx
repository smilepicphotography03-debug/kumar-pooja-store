import { Metadata } from 'next'
import data from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const products = data.products || [];
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const products = data.products || [];
  const product = products.find((p) => p.id.toString() === params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found - Kumar Pooja Store',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: `${product.name} - Kumar Pooja Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }) {
  const products = data.products || [];
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-semibold text-red-600">Product not found</h1>
        <Link href="/products" className="text-blue-600 underline mt-4 block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 container mx-auto">
      <Link href="/products" className="text-blue-600 underline mb-4 inline-block">
        ← Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-md rounded-2xl p-6">
        <Image
          src={product.image || "/images/placeholder.jpg"}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-xl object-cover w-full h-96"
        />
        <div>
          <h1 className="text-3xl font-bold text-deepRed mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p className="text-lg text-gray-800 mb-6">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
