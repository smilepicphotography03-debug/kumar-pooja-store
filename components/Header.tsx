"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // Trigger confetti every ~600px scroll
      if (y % 600 < 10) {
        confetti({
          particleCount: 60,
          spread: 80,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
          colors: ["#ffb347", "#ffcc33", "#ff7f50", "#ffe4b5", "#ff6347"],
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed w-full z-50 bg-[#FFF8E1]/90 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-playfair text-[#B22222] text-2xl font-bold"
        >
          Kumar Pooja Store
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-[#B22222] hover:text-[#DAA520] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-[#B22222] hover:text-[#DAA520] transition-colors"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-[#B22222] hover:text-[#DAA520] transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button className="md:hidden text-[#B22222]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
