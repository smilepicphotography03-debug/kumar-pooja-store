'use client';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-800">
          Terms & Conditions
        </h1>

        <p className="mb-4">
          Welcome to <strong>Kumar Pooja Store</strong>. By accessing or using our website, you agree to the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Product Information</h2>
        <p className="mb-4">
          We strive to provide accurate product descriptions, images, and prices. However, minor variations may occur. Prices and availability are subject to change without prior notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Orders & Payments</h2>
        <p className="mb-4">
          All orders are subject to confirmation and product availability. Payment must be completed at checkout using secure methods provided on our site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Returns & Refunds</h2>
        <p className="mb-4">
          Returns or exchanges are accepted only for damaged or defective items reported within 48 hours of delivery. Refunds will be processed after verification.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="mb-4">
          Kumar Pooja Store is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Updates to Terms</h2>
        <p className="mb-4">
          We may update these Terms & Conditions periodically. Continued use of our website signifies your acceptance of the updated terms.
        </p>

        <p className="text-sm text-gray-600 mt-8">Last updated: October 2025</p>

        <div className="text-center mt-8">
          <Link href="/" className="text-orange-700 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
