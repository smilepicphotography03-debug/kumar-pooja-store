'use client';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-800">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At <strong>Kumar Pooja Store</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or purchase our products.
        </p>

        <p className="mb-4">
          We collect only the information necessary to process your orders — such as your name, phone number, address, and email. This data is used solely for communication, delivery, and support purposes. We do not share or sell your personal information to third parties.
        </p>

        <p className="mb-4">
          Your payment information is securely handled by trusted payment partners, and we ensure compliance with all applicable data protection laws. Cookies may be used to enhance your browsing experience.
        </p>

        <p className="mb-4">
          By using our website, you agree to this Privacy Policy. Any updates will be reflected on this page.
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
