import React, { useState } from "react";

export interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        className="w-full text-left font-medium text-lg flex justify-between"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}
