"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/constants";
import GaleriaSlider from "@/components/GaleriaSlider";

const included = [
  "Quincho cubierto con capacidad para 60 personas",
  "Asador y espacio al aire libre con vista al dique",
  "Mesas, sillas y sanitarios disponibles",
  "Ideal para cumpleaños, eventos deportivos y reuniones",
  "Ambiente seguro y natural con estacionamiento cercano",
];

const images = [
  "/assets/imagenes/base.webp",
  "/assets/imagenes/quincho2.webp",
  "/assets/imagenes/quincho3.webp",
  "/assets/imagenes/quincho4.webp",
  "/assets/imagenes/quincho5.webp",
  "/assets/imagenes/quincho6.webp",
];

export default function QuinchoEventosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quincho para Eventos
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Un espacio amplio, natural y equipado para tus celebraciones
            especiales
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
                    src="/assets/imagenes/quincho4.webp"
                    alt="Quincho para eventos"
                    width={400}
                    height={300}
                    className="w-full rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Vista al dique
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Espacio para Celebrar</CardTitle>
                <p className="text-muted-foreground mb-4">
                  Nuestra base cuenta con un quincho ideal para reuniones,
                  cumpleaños y todo tipo de eventos. Rodeado de naturaleza y
                  totalmente equipado para tu comodidad.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Capacidad: 60 personas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Ubicado frente al dique El Cadillal
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Reservas por día o franja horaria
                    </span>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hola, me comunico desde la web de TKC y quiero consultar sobre el alquiler del quincho para eventos."
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
      <GaleriaSlider images={images}></GaleriaSlider>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reservá el <span className="gradient-text">Quincho</span> para tu
            próximo evento
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Disfrutá de un entorno natural, todas las comodidades y la mejor
            vista del dique
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, quiero más información sobre el alquiler del quincho para un evento."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
            >
              <span>Reservar Quincho</span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
