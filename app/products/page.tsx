"use client";

import PageTemplate from "@/components/PageTemplate";
import data from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

const products = data.products;

export default function ProductsPage() {
  return (
    <PageTemplate>
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-[#a50000] mb-8 text-center">
            Our Products
          </h1>

          {products && products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <Image
                    src={product.image || "/images/placeholder.jpg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-lg mb-3 object-cover w-full h-48"
                  />
                  <h3 className="font-semibold text-gray-900 text-base">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700">{product.category}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No products available.</p>
          )}
        </div>
      </section>
    </PageTemplate>
  );
}
