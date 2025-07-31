import React from "react";
import Button from "./Button";

export interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
}

export default function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>}
      {cta && (
        <Button onClick={cta.onClick} className="text-lg px-6 py-3">
          {cta.label}
        </Button>
      )}
    </section>
  );
}
