"use client";
import { Hero, FeatureCard, PricingCard, TestimonialCarousel, FAQItem } from "@/components";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // number of contacts for pricing calculator
  const [contacts, setContacts] = useState(1000);
  const features = [
    { title: "Fast Performance", description: "Optimized for speed and efficiency.", icon: "⚡" },
    { title: "Cloud Sync", description: "Access your data anywhere.", icon: "☁️" },
    { title: "Secure", description: "Top-notch security features.", icon: "🔒" },
  ];

  const testimonials = [
    { quote: "This product changed the way we work.", author: "Jane Doe" },
    { quote: "Fantastic experience and support!", author: "John Smith" },
  ];

  const tiers = [
    {
      plan: "Basic",
      price: `$${(contacts * 0.01).toFixed(2)}/mo`,
      features: ["1 project", "Email support"],
    },
    {
      plan: "Pro",
      price: `$${(contacts * 0.02).toFixed(2)}/mo`,
      features: ["5 projects", "Priority support", "Analytics"],
    },
    {
      plan: "Enterprise",
      price: `$${(contacts * 0.04).toFixed(2)}/mo`,
      features: ["Unlimited projects", "Dedicated manager", "Advanced analytics"],
    },
  ];

  const tierFeatures = ["Projects", "Support", "Analytics"];

  return (
    <div className="space-y-20">
      <Hero
        title="Welcome to Our SaaS"
        subtitle="All the tools you need to grow your business"
        cta={{ label: "Get Started", onClick: () => alert("Started") }}
        demoSrc="/demo.json"
      />

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </section>

      <section className="text-center max-w-5xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <label className="font-medium mr-2">Contacts: {contacts}</label>
          <input
            type="range"
            min={100}
            max={10000}
            step={100}
            value={contacts}
            onChange={(e) => setContacts(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <PricingCard key={t.plan} {...t} />
          ))}
        </div>

        <table className="w-full text-left border-t">
          <thead>
            <tr>
              <th className="py-2">Feature</th>
              {tiers.map((t) => (
                <th key={t.plan} className="py-2 text-center">
                  {t.plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tierFeatures.map((f) => (
              <tr key={f} className="border-t">
                <td className="py-2">{f}</td>
                {tiers.map((t) => (
                  <td key={t.plan} className="py-2 text-center">
                    {t.features.some((ft) => ft.toLowerCase().includes(f.toLowerCase())) ? "✓" : "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="max-w-xl mx-auto px-4">
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      <section className="max-w-2xl mx-auto px-4 space-y-4">
        <FAQItem question="What is your refund policy?" answer="We offer a 30-day money-back guarantee." />
        <FAQItem question="Can I upgrade later?" answer="Yes, you can upgrade at any time." />
        <FAQItem question="Do you offer support?" answer="Absolutely, email and chat support are included." />
      </section>

      <footer className="bg-gray-100 py-8 text-center space-y-2">
        <div className="space-x-4">
          <a href="https://twitter.com" className="hover:underline">Twitter</a>
          <a href="https://facebook.com" className="hover:underline">Facebook</a>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <a href="mailto:contact@example.com" className="hover:underline">Contact Us</a>
        </div>
        <div className="space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
