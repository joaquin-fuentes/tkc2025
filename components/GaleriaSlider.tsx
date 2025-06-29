"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useRef } from "react";

type SliderProps = {
  images: string[];
};

export default function GaleriaSlider({ images }: SliderProps) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created(s) {
      timer.current = setInterval(() => {
        s.next();
      }, 3500);
    },
    destroyed() {
      if (timer.current) clearInterval(timer.current);
    },
  });

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Galería de <span className="gradient-text">Imágenes</span>
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, i) => (
            <div
              key={i}
              className="keen-slider__slide rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Imagen ${i + 1}`}
                width={1000}
                height={600}
                className="w-full h-72 md:h-96"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
