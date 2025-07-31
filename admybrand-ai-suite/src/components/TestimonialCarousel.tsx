"use client";
import React, { useState } from "react";

export interface Testimonial {
  quote: string;
  author: string;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md relative">
      <p className="italic mb-4">&quot;{current.quote}&quot;</p>
      <p className="font-semibold">- {current.author}</p>
      {testimonials.length > 1 && (
        <div className="flex justify-between mt-4">
          <button onClick={prev} className="text-blue-600 hover:underline">
            Prev
          </button>
          <button onClick={next} className="text-blue-600 hover:underline">
            Next
          </button>
        </div>
      )}
    </div>
  );
}
