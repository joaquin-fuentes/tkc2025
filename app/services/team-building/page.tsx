"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/constants";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Mejora relaciones y cohesi\u00f3n grupal",
  "Fomenta la comunicaci\u00f3n y confianza",
  "Desarrolla liderazgo y promueve la creatividad",
  "Aumenta la productividad frente al trabajo individualista",
];

const imagesDesktop = [
  {
    src: "/assets/imagenes/juegos.webp",
    alt: "Team 1",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    src: "/assets/imagenes/grupo4.webp",
    alt: "Team 2",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "/assets/imagenes/portada2.webp",
    alt: "Team 3",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: "/assets/imagenes/portada3.webp",
    alt: "Team Vertical",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
];
const imagesMobile = [
  {
    src: "/assets/imagenes/juegos.webp",
    alt: "Team 1",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    src: "/assets/imagenes/grupo4.webp",
    alt: "Team 2",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "/assets/imagenes/portada2.webp",
    alt: "Team 3",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: "/assets/imagenes/portada3.webp",
    alt: "Team 4",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
];

export default function TeamBuildingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Team Building</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Actividades de integraci\u00f3n para fortalecer equipos de trabajo
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            ¿Qué es el <span className="gradient-text">Team Building</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            TKC ofrece servicios especializados en team building, coaching y
            motivación para empresas y grupos. Adaptamos nuestras propuestas a
            las necesidades particulares de cada organización. Esta filosofía
            entiende a los equipos como unidades interconectadas, más allá de
            sus miembros individuales.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Beneficios:</h3>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="text-base flex items-start gap-2">
                <span className="text-primary">•</span> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Momentos de <span className="gradient-text">Integración</span>
          </h2>
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {imagesDesktop.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl shadow-md ${img.colSpan} ${img.rowSpan}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover first:object-bottom hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:hidden">
            {imagesMobile.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl shadow-md ${img.colSpan} ${img.rowSpan}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover first:object-bottom hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Querés fortalecer tu equipo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Consultá ahora por nuestras actividades de Team Building
            personalizadas
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, me comunico desde la web de TKC y quiero consultar sobre las actividades de Team Building."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-red-600 hover:bg-red-700 flex items-center space-x-2">
              <FaWhatsapp className="w-5 h-5" />
              <span>Consultar por WhatsApp</span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
