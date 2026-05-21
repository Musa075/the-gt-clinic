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
      className={`relative select-none overflow-hidden rounded-2xl border border-gold/25 shadow-xl aspect-4/3 cursor-ew-resize ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
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
        <div className="absolute bottom-4 right-4 bg-primary-dark/80 text-gold text-xs uppercase tracking-wider font-semibold py-1.5 px-3.5 rounded-full backdrop-blur-sm border border-gold/25">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Overlay clipped by slider width) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
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
        <div className="absolute bottom-4 left-4 bg-primary-light/85 text-primary-dark text-xs uppercase tracking-wider font-semibold py-1.5 px-3.5 rounded-full backdrop-blur-sm border border-beige">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-gold-gradient cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-light border-2 border-gold flex items-center justify-center shadow-2xl glass-card transition-transform duration-200 hover:scale-110 active:scale-95">
          <div className="flex gap-1 items-center justify-center">
            <span className="block w-1.5 h-3 border-l-2 border-r-2 border-gold-dark/60"></span>
          </div>
        </div>
      </div>

      {/* Touch Help overlay (subtle micro-instruction) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 text-white/80 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm border border-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300">
        Drag slider to compare
      </div>
    </div>
  );
}
