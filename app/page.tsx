'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-orange-100 to-white text-gray-800 min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/temple_background.jpg"
            alt="Temple Background"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-orange-900/40"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Kumar Pooja Store
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto">
            Divine Traditions. Pure Offerings.
          </p>
        </div>

        <div className="relative z-10 mt-8">
          <Link
            href="/products"
            className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-700 transition shadow-md"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange-800 mb-6">
          About Kumar Pooja Store
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          With over 25 years of devotion and expertise, <strong>Kumar Pooja Store</strong> offers a curated collection of handcrafted incense, pure pooja essentials, and premium spiritual products. 
          Rooted in Indian tradition and guided by eco-conscious values, we bring the essence of spirituality to your home — inspiring purity, faith, and divine connection.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-orange-50 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: '/images/oil.jpg', alt: 'Oil for Pooja' },
            { src: '/images/agarbathi.jpg', alt: 'Agarbathi' },
            { src: '/images/camphor.jpg', alt: 'Camphor for Pooja' },
          ].map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={350}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-10 px-6 text-center md:text-left">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Left: Store Info */}
          {/* 
          <div>
            <h4 className="text-xl font-semibold mb-2">Kumar Pooja Store</h4>
            <p className="text-orange-100">
              Divine Traditions. Pure Offerings.
            </p>
          </div>
          */}

          {/* Middle: Business Info */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Business Information</h4>
            <p>94898 30438, 94896 57260</p>
            <p>kumarpoojastore@gmail.com</p>
            <p>Ambai Rd, Opp. TPV Multiplex, Alangulam, Tamil Nadu</p>
          </div>

          {/* Right: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li>
                <a
                  href="https://wa.me/919489657260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* FAQ Section */}
    <div className="md:col-span-2">
      <h4 className="text-xl font-semibold mb-4 text-center md:text-left">FAQ</h4>
      <ul className="space-y-3">
        <li>
          <details className="bg-orange-700/40 rounded-md p-3">
            <summary className="cursor-pointer font-semibold">What products do you offer?</summary>
            <p className="mt-2 text-orange-100 text-sm">
              We offer a wide range of pooja items including lamps, oils, kumkum, agarbathis, and traditional essentials.
            </p>
          </details>
        </li>
        <li>
          <details className="bg-orange-700/40 rounded-md p-3">
            <summary className="cursor-pointer font-semibold">Do you provide home delivery?</summary>
            <p className="mt-2 text-orange-100 text-sm">
              Yes, we provide local home delivery. Please contact us for delivery options and charges.
            </p>
          </details>
        </li>
        <li>
          <details className="bg-orange-700/40 rounded-md p-3">
            <summary className="cursor-pointer font-semibold">Can I place bulk or temple orders?</summary>
            <p className="mt-2 text-orange-100 text-sm">
              Absolutely! We handle bulk and temple orders. You can contact us via phone or WhatsApp for inquiries.
            </p>
          </details>
        </li>
      </ul>
    </div>
  

        {/* Policies Section at Bottom */}
        <div className="border-t border-orange-700 mt-10 pt-6 text-center text-orange-200">
          <ul className="flex flex-col md:flex-row justify-center gap-4 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>

          <p className="mt-4 text-orange-300">
            © 2025 All rights reserved. Kumar Pooja Store.
          </p>
        </div>
      </footer>
    </main>
  );
}
