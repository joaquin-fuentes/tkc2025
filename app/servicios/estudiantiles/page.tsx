"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, MapPin, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/constants";
import GaleriaSlider from "@/components/GaleriaSlider";

const included = [
  "Excursión en kayak con guías certificados",
  "Actividades diseñadas para grupos escolares",
  "Espacios al aire libre para recreación y picnic",
  "Baños disponibles en el predio",
  "Ambiente seguro y natural con supervisión permanente",
];

const images = [
  "/assets/imagenes/portada2.webp",
  "/assets/imagenes/portada3.webp",
  "/assets/imagenes/grupo4.webp",
  "/assets/imagenes/grupo5.webp",
  "/assets/imagenes/grupo3.webp",
];

export default function EstudiantilesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Excursiones Estudiantiles
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Aventuras en kayak y contacto con la naturaleza para grupos
            escolares
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
                    src="/assets/imagenes/portada2.webp"
                    alt="Excursiones estudiantiles"
                    width={400}
                    height={300}
                    className="w-full rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Grupos escolares
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Aventura Educativa</CardTitle>
                <p className="text-muted-foreground mb-4">
                  Sumate a nuestras salidas estudiantiles donde la diversión se
                  mezcla con la naturaleza. Remá junto a tus compañeros, aprendé
                  sobre el entorno y disfrutá de una jornada diferente en
                  nuestras instalaciones.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Grupos desde 15 estudiantes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Actividades en el Dique Celestino Gelsi
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Compass className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Recorridos guiados y espacios de picnic
                    </span>
                  </div>
                </div>
                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hola, me comunico desde la web de TKC y quiero consultar sobre excursiones estudiantiles."
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

      {/* Carousel */}
      <GaleriaSlider images={images} />

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¡Viví una{" "}
            <span className="gradient-text">experiencia educativa</span>{" "}
            inolvidable!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Propuestas diseñadas para escuelas que buscan aprendizaje, diversión
            y naturaleza
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, quiero más información sobre las excursiones estudiantiles."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
            >
              <span>Reservar Excursión</span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
