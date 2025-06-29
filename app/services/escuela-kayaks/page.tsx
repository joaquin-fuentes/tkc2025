"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/constants";
import GaleriaSlider from "@/components/GaleriaSlider";

const included = [
  "Kayak propio o provisto por la escuela",
  "Instructor profesional",
  "Chaleco y remo incluidos",
  "Clases personalizadas",
  "Conexión con la naturaleza",
];
const images = [
  "/assets/imagenes/escuelita.webp",
  "/assets/imagenes/grupo2.webp",
  "/assets/imagenes/grupo3.webp",
  "/assets/imagenes/grupo4.webp",
  "/assets/imagenes/grupo5.webp",
  "/assets/imagenes/grupo.webp",
];
export default function EscuelaKayakPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Escuela de Kayak
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Clases para adultos con enfoque en técnica, seguridad y navegación
          </p>
        </div>
      </section>

      {/* Info + Card */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Card Izquierda */}
            <Card className="hover:shadow-xl transition-all duration-300 w-full sm:w-[80%] mx-auto">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src="/assets/imagenes/escuelita.webp"
                    alt="Escuela de Kayak"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover object-bottom rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Mié y Sábados
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Clases para Adultos</CardTitle>
                <p className="text-muted-foreground mb-4">
                  Entrenamientos guiados por instructores, pensados para todos
                  los niveles y edades.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Miércoles 16 a 18hs / Sábados 11 a 13hs y 16 a 18hs
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">Todos los niveles</span>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hola, me comunico desde la web de TKC y quiero consultar sobre la Escuela de Kayak."
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
      {/* carousel */}
      <GaleriaSlider images={images}></GaleriaSlider>
      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Te gustaría <span className="gradient-text">sumarte</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactanos y unite a la Escuela de Kayak de TKC
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, me comunico desde la web de TKC y quiero consultar sobre la Escuela de Kayak."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Quiero más info</span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
