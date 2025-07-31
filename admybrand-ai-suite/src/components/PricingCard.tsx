import React from "react";
import Button from "./Button";

export interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  onSelect?: () => void;
}

export default function PricingCard({ plan, price, features, onSelect }: PricingCardProps) {
  return (
    <div className="border rounded-lg p-6 text-center bg-white shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{plan}</h3>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <ul className="text-gray-600 mb-6 space-y-1">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      {onSelect && (
        <Button onClick={onSelect} className="w-full">
          Select
        </Button>
      )}
    </div>
  );
}
