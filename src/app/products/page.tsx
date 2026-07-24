"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Tap NFC Business Card",
    price: 35,
    description: "Premium NFC card with your digital profile. Share everything with a tap.",
    features: ["NFC Chip", "Custom Design", "10 Year Lifetime", "200K+ Scans"],
    image: "/products/nfc-card.png",
    category: "cards",
  },
  {
    id: 2,
    name: "Tap Custom Card",
    price: 45,
    description: "Fully customized card with your own design. We print it for you.",
    features: ["Custom Design", "Premium Quality", "NFC Enabled", "Vibrant Colors"],
    image: "/products/custom-card.png",
    category: "cards",
  },
  {
    id: 3,
    name: "NFC Keychain",
    price: 25,
    description: "Carry your profile on your keys. Stylish and practical.",
    features: ["Leather Finish", "NFC Chip", "Durable", "Multiple Colors"],
    image: "/products/keychain.png",
    category: "accessories",
  },
  {
    id: 4,
    name: "NFC Sticker",
    price: 15,
    description: "Stick it anywhere. Your profile on any surface.",
    features: ["Waterproof", "Strong Adhesive", "NFC Chip", "Thin Design"],
    image: "/products/sticker.png",
    category: "accessories",
  },
  {
    id: 5,
    name: "Pocket Cardholder",
    price: 55,
    description: "World's most advanced NFC cardholder. Premium leather.",
    features: ["Premium Leather", "NFC Built-in", "RFID Blocking", "Slim Profile"],
    image: "/products/cardholder.png",
    category: "accessories",
  },
  {
    id: 6,
    name: "GoWrist Band",
    price: 35,
    description: "Digital business card on your wrist. Compatible with any watch.",
    features: ["Universal Fit", "NFC Chip", "Comfortable", "Water Resistant"],
    image: "/products/gowrist.png",
    category: "accessories",
  },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "cards", label: "NFC Cards" },
  { id: "accessories", label: "Accessories" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Choose the perfect NFC product to share your digital profile
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? "gradient-bg text-white shadow-lg"
                  : "bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 card-hover"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                <div className="w-32 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-2xl font-bold gradient-text">
                    ${product.price}
                  </span>
                </div>
                <p className="text-muted mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 text-center py-3 rounded-xl font-medium border-2 border-gray-200 dark:border-slate-600 hover:border-primary transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="flex-1 gradient-bg text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compatibility Info */}
        <div className="mt-16 bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Compatibility</h2>
            <p className="text-muted">
              TapCard products work with most modern smartphones
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-1">iPhone XR & newer</h3>
              <p className="text-sm text-muted">Full NFC support</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold mb-1">Most Androids</h3>
              <p className="text-sm text-muted">Native NFC support</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl">
              <div className="text-3xl mb-3">📷</div>
              <h3 className="font-semibold mb-1">QR Code Fallback</h3>
              <p className="text-sm text-muted">Works on any phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
