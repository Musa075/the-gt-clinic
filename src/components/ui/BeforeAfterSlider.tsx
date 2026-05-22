"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After Treatment",
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-3xl border-2 border-gold/20 shadow-2xl aspect-4/3 cursor-ew-resize transition-luxury hover:border-gold/45 ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Actual Patient Results Label */}
      <div className="absolute top-5 left-5 z-20 bg-primary-dark/95 text-gold text-[9px] uppercase tracking-[0.2em] font-extrabold py-2 px-4 rounded-full border border-gold/30 backdrop-blur-md shadow-md pointer-events-none">
        Actual Patient Results
      </div>

      {/* Drag Help Overlay */}
      <div className="absolute top-5 right-5 z-20 bg-black/60 backdrop-blur-sm text-white/85 text-[8px] uppercase tracking-[0.25em] px-3 py-2 rounded-full border border-white/10 pointer-events-none opacity-90 transition-opacity duration-300">
        Drag Center to Compare
      </div>

      {/* After Image (Full Base) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt="After treatment result"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-5 right-5 z-20 bg-primary-dark/90 text-gold text-[10px] uppercase tracking-[0.2em] font-bold py-2 px-4 rounded-full backdrop-blur-md border border-gold/30 shadow-md">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Overlay clipped by slider width) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-10"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={beforeImage}
          alt="Before treatment condition"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-5 left-5 z-20 bg-white/90 text-primary-dark text-[10px] uppercase tracking-[0.2em] font-bold py-2 px-4 rounded-full backdrop-blur-md border border-beige shadow-md">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/85 to-gold-dark cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-gold/30 flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-200 hover:scale-110 active:scale-95 cursor-ew-resize">
          {/* Animated pulse ring */}
          <div className="absolute inset-0.5 rounded-full border border-gold/25 animate-pulse" />
          <div className="flex gap-1 items-center justify-center">
            <span className="block w-[3px] h-3 bg-gold-dark rounded-full"></span>
            <span className="block w-[3px] h-3 bg-gold-dark rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
