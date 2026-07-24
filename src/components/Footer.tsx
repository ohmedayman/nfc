import Link from "next/link";

const footerLinks = {
  Product: [
    { href: "/products", label: "All Products" },
    { href: "/products/nfc-card", label: "NFC Cards" },
    { href: "/products/keychain", label: "Keychains" },
    { href: "/products/sticker", label: "Stickers" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  Support: [
    { href: "/help", label: "Help Center" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund", label: "Refund Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">TapCard</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Share your information instantly with NFC technology. Professional
              networking made simple and elegant.
            </p>
            <div className="flex gap-4">
              {["facebook", "instagram", "tiktok", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gray-400 rounded" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 TapCard. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <div className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs text-gray-400">
              Visa
            </div>
            <div className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs text-gray-400">
              Mastercard
            </div>
            <div className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs text-gray-400">
              PayPal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
