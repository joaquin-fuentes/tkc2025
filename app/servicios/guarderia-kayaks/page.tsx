"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, MapPin, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/constants";
import GaleriaSlider from "@/components/GaleriaSlider";

const included = [
  "Espacio asignado exclusivo para cada kayak",
  "Boxes para almacenar chalecos, remos y accesorios",
  "Capacidad total para 66 embarcaciones",
  "Instalaciones seguras y cómodas en la orilla",
  "Baños disponibles para socios y usuarios",
];

const images = [
  "/assets/imagenes/base.webp",
  "/assets/imagenes/guarderia.webp",
  "/assets/imagenes/guarderia2.webp",
  "/assets/imagenes/guarderia3.webp",
  "/assets/imagenes/quincho6.webp",
  "/assets/imagenes/guarderia2.webp",
];

export default function GuarderiaKayakPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Guardería de Kayaks
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Almacená tu kayak de forma segura y práctica, junto al dique
          </p>
        </div>
      </section>

      {/* Card + Incluye */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Card */}
            <Card className="hover:shadow-xl transition-all duration-300 w-full sm:w-[80%] mx-auto">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src="/assets/imagenes/base.webp"
                    alt="Guardería de kayaks"
                    width={400}
                    height={300}
                    className="w-full rounded-t-lg "
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Espacio seguro
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Tu kayak siempre listo</CardTitle>
                <p className="text-muted-foreground mb-4">
                  Nuestra guardería está pensada para que puedas disfrutar más
                  tiempo en el agua y menos tiempo cargando el kayak. Guardá tu
                  embarcación y accesorios en un lugar seguro frente al dique.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Capacidad: 66 kayaks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Orilla del Dique El Cadillal
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Espacios numerados y cerrados
                    </span>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hola, quiero consultar sobre el servicio de guardería de kayaks."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-500 hover:bg-red-600 flex items-center justify-center space-x-2">
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Consultar por WhatsApp</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Lista de lo incluido */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
                ¿Qué <span className="gradient-text">Incluye</span>?
              </h2>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <GaleriaSlider images={images} />

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sumate a la <span className="gradient-text">guardería</span> y
            olvidate de transportar tu kayak
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accedé a un lugar exclusivo y cómodo para dejar tu embarcación a
            metros del agua
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, me interesa la guardería de kayaks. ¿Podrían brindarme más detalles?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
            >
              <span>Reservar Guardería</span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
