"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiOnScroll() {
  useEffect(() => {
    const handleScroll = () => {
      confetti({
        particleCount: 25, // fewer, subtle particles
        spread: 45, // gentler spread
        startVelocity: 25, // slower fall
        gravity: 0.8, // smoother descent
        scalar: 0.8, // slightly smaller particles
        ticks: 150, // stays on screen longer
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#FFD580", "#FFB347", "#FF7E47", "#FFF8E1", "#E6B800"], // warm, festive tones
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
