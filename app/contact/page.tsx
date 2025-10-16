"use client";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 🔹 Navbar Section */}
      <header className="bg-yellow-100 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800">
            Kumar Pooja Store
          </h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-orange-600 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-orange-600 transition">
              Products
            </Link>
            <Link href="/contact" className="text-orange-700 font-semibold">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* 🔹 Contact Section */}
      <main className="p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 mt-6">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

          <div className="space-y-4 text-lg">
            {/* Store Location */}
            <div>
              <h3 className="font-semibold">Visit Our Store</h3>
              <p>Ambai Rd, Opposite TPV Multiplex,</p>
              <p>Alangulam, Tamil Nadu – 627851</p>
              <a
                href="https://maps.app.goo.gl/WgjeyZVSsTJRVvRGA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium underline hover:text-blue-800 transition"
              >
                View on Google Maps
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>09489657260</p>
            </div>

            {/* Payment Options */}
            <div className="mt-8 space-y-8">
              <h3 className="text-2xl font-bold text-center text-gray-900">
                Payment Options
              </h3>

              {/* Paytm Section */}
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm">
                <div>
                  <h4 className="font-semibold text-lg">Paytm</h4>
                  <p className="text-gray-700">9489657260@ptsbi</p>
                  <a
                    href="paytm://upi/pay?pa=9489657260@ptsbi&pn=Kumar%20Pooja%20Store"
                    className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Pay with Paytm
                  </a>
                </div>
                <Image
                  src="/images/paytm-qr.png"
                  alt="Paytm QR"
                  width={120}
                  height={120}
                  className="rounded-lg border"
                />
              </div>

              {/* Google Pay Section */}
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm">
                <div>
                  <h4 className="font-semibold text-lg">Google Pay</h4>
                  <p className="text-gray-700">kannan76.tk-4@oksbi</p>
                  <a
                    href="upi://pay?pa=kannan76.tk-4@oksbi&pn=Kumar%20Pooja%20Store"
                    className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Pay with GPay
                  </a>
                </div>
                <Image
                  src="/images/gpay-qr.png"
                  alt="Google Pay QR"
                  width={120}
                  height={120}
                  className="rounded-lg border"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
