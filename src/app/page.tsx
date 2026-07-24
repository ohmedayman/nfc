"use client";

import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: "🎨",
    title: "Profile Designer",
    description: "Customize your profile design to match your personal brand",
  },
  {
    icon: "🌍",
    title: "Multi Language",
    description: "Support for Arabic and English profiles",
  },
  {
    icon: "🌙",
    title: "Dark & Light Mode",
    description: "Stand out with distinctive appearance modes",
  },
  {
    icon: "⚡",
    title: "Quick Actions",
    description: "Add to contacts and WhatsApp with one tap",
  },
  {
    icon: "📱",
    title: "QR Code Sharing",
    description: "Share your profile instantly via QR code",
  },
  {
    icon: "💳",
    title: "Apple Wallet",
    description: "Add your profile to Apple Wallet on iPhone",
  },
];

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    features: [
      "Profile Designer",
      "2 Designs",
      "Light & Dark Mode",
      "Quick Action Buttons",
      "QR Code Sharing",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "5",
    period: "/month",
    features: [
      "Without Ads",
      "Multi Language",
      "Custom Profile Link",
      "Analytics Dashboard",
      "More Customization",
      "Apple Wallet",
    ],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Business",
    price: "24",
    period: "/month",
    features: [
      "Unlimited Users",
      "Monthly Billing",
      "Manage All Users",
      "All Pro Features",
      "Priority Support",
      "Custom Branding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Entrepreneur",
    content: "TapCard transformed how I network at events. One tap and new contacts have everything they need!",
    rating: 5,
  },
  {
    name: "Sara Mohamed",
    role: "Content Creator",
    content: "The design options are amazing. My profile looks professional and matches my brand perfectly.",
    rating: 5,
  },
  {
    name: "Omar Khalid",
    role: "Sales Manager",
    content: "Switched from paper cards to TapCard. Never going back. The analytics are incredibly useful.",
    rating: 5,
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 gradient-bg opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Share Everything With A Tap
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Information
                <br />
                <span className="gradient-text">With Single Click</span>
              </h1>
              <p className="text-lg text-muted mb-8 max-w-lg">
                Create your digital business card and share your professional
                information instantly. NFC technology meets elegant design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 inline-flex items-center gap-2"
                >
                  Get Started Free
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors"
                >
                  View Products
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">50K+</div>
                  <div className="text-sm text-muted">Active Users</div>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-muted">Countries</div>
                </div>
                <div className="w-px h-12 bg-gray-200 dark:bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold gradient-text">1M+</div>
                  <div className="text-sm text-muted">Cards Shared</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center animate-fade-in">
              <div className="relative">
                {/* NFC Card */}
                <div className="nfc-card animate-float">
                  <div className="nfc-chip" />
                  <div className="absolute top-12 right-8 text-right">
                    <div className="text-white/40 text-xs mb-1">DIGITAL CARD</div>
                    <div className="text-white font-semibold text-lg">TAPCARD</div>
                  </div>
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="text-white/60 text-xs mb-1">Share your profile</div>
                    <div className="text-white/40 text-xs">tapcard.co/username</div>
                  </div>
                  <div className="absolute bottom-6 right-8">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white/60"
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
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-white dark:bg-slate-800 rounded-xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Share Your Profile</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Powerful features designed to make networking effortless and
              professional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 card-hover"
              >
                <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Three simple steps to create your digital business card
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description:
                  "Sign up and design your digital business card with our easy-to-use editor",
              },
              {
                step: "02",
                title: "Customize Design",
                description:
                  "Choose from multiple themes, add your links, and personalize your style",
              },
              {
                step: "03",
                title: "Share Instantly",
                description:
                  "Share via NFC tap, QR code, or link. Your contacts get everything in one click",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-slate-800/50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Choose the plan that suits your networking needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 transition-all card-hover ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10 scale-105"
                    : "border-gray-100 dark:border-slate-700"
                }`}
              >
                {plan.popular && (
                  <div className="text-primary text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "gradient-bg text-white shadow-lg shadow-primary/25"
                      : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-muted text-lg">
              See what our users have to say about TapCard
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Go Digital?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Join 50,000+ professionals who already use TapCard to network
                smarter
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
              >
                Create Your Card Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
