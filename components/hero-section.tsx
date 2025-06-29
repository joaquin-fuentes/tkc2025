"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('/assets/imagenes/portada.webp')] bg-cover bg-bottom bg-fixed">
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="w-72 h-48 relative animate-bounce-in">
          <Image
            src="/assets/logos/logoTransparente.webp"
            alt="Logo TKC"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Texto y botones */}
        <p className="text-xl md:text-2xl mb-8 animate-slide-in-left opacity-90">
          Descubre la emoción del turismo aventura en Tucumán con TKC
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
            onClick={() => scrollToSection("services")}
          >
            Explorar Servicios
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-red-600 hover:bg-gray-100 hover:text-red-600 px-8 py-3 text-lg dark:bg-white"
            onClick={() => scrollToSection("contact")}
          >
            Contactanos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
