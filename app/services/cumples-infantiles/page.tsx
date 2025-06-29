"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Shield, CheckCircle, PartyPopper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/constants";
import GaleriaSlider from "@/components/GaleriaSlider";

const included = [
  "Excursión en kayak guiada por profesionales",
  "Chalecos salvavidas para niños y adultos",
  "Menú personalizado: hamburguesas, snacks o viandas",
  "Acceso al quincho totalmente equipado",
  "Juegos y dinámicas organizadas en espacio seguro",
];
const images = [
  "/assets/imagenes/escuelita.webp",
  "/assets/imagenes/grupo2.webp",
  "/assets/imagenes/grupo3.webp",
  "/assets/imagenes/grupo4.webp",
  "/assets/imagenes/grupo5.webp",
  "/assets/imagenes/grupo.webp",
];
export default function CumpleKayakPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cumpleaños Infantiles
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Una celebración original, segura y divertida en plena naturaleza
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
                    src="/assets/imagenes/grupo5.webp"
                    alt="Cumpleaños en kayak"
                    width={400}
                    height={300}
                    className="w-full h-54 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Experiencia única
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Fiesta de Aventura</CardTitle>
                <p className="text-muted-foreground mb-4">
                  ¿Querés festejar de una forma distinta? Organizamos cumpleaños
                  donde los chicos navegan en kayak, exploran, juegan y terminan
                  compartiendo un almuerzo al aire libre.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Grupos desde 8 niños</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Duración: 3 a 4 horas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Acompañamiento de guías certificados
                    </span>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hola, me comunico desde la web de TKC y quiero consultar sobre los cumpleaños infantiles en kayak."
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¡Hacé que su <span className="gradient-text">cumple</span> sea
            inolvidable!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Diversión, seguridad y naturaleza en una propuesta distinta para
            celebrar
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hola, me interesa festejar un cumpleaños infantil con TKC. ¿Podrían brindarme más información?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
            >
              <PartyPopper className="w-5 h-5" />
              <span>Reservar Cumpleaños</span>
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
