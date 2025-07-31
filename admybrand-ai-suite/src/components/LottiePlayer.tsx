"use client";
import { useEffect, useRef } from "react";

export interface LottiePlayerProps {
  src: string;
  style?: React.CSSProperties;
}

export default function LottiePlayer({ src, style }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);

    const player = document.createElement("lottie-player");
    player.setAttribute("src", src);
    player.setAttribute("background", "transparent");
    player.setAttribute("speed", "1");
    player.setAttribute("loop", "");
    player.setAttribute("autoplay", "");
    Object.assign(player.style, style);
    containerRef.current?.appendChild(player);

    return () => {
      player.remove();
      document.body.removeChild(script);
    };
  }, [src, style]);

  return <div ref={containerRef} suppressHydrationWarning />;
}
