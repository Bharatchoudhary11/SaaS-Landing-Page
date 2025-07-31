import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export interface HeroProps {
  title: string;
  subtitle?: string;
  /** Optional CTA button */
  cta?: {
    label: string;
    onClick: () => void;
  };
  /** Optional path to an MP4 or Lottie JSON file */
  demoSrc?: string;
}

export default function Hero({ title, subtitle, cta, demoSrc }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden"
    >
      <div className="relative z-10 inline-block bg-white/30 backdrop-blur-md p-8 rounded-xl">
        <h1 className="mb-4">{title}</h1>
        {subtitle && <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        {demoSrc && (
          <div className="mb-8 flex justify-center">
            {demoSrc.endsWith(".json") ? (
              <>
              <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" async />
              {React.createElement(
                "lottie-player",
                {
                  src: demoSrc,
                  background: "transparent",
                  speed: "1",
                  loop: true,
                  autoplay: true,
                  style: { width: "300px", height: "300px" },
                } as any // eslint-disable-line @typescript-eslint/no-explicit-any
              )}
            </>
          ) : (
            <video
              src={demoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md rounded-lg"
            />
          )}
        </div>
        )}
        {cta && (
          <Button onClick={cta.onClick} className="text-lg px-6 py-3">
            {cta.label}
          </Button>
        )}
      </div>
    </motion.section>
  );
}
