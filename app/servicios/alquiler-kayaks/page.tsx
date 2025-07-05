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
import GaleriaSlider from "@/components/GaleriaSlider";
import { WHATSAPP_NUMBER } from "@/constants";

const included = [
  "Kayak en excelente estado",
  "Remo profesional",
  "Chaleco salvavidas",
  "Instrucciones básicas",
  "Mapa de rutas recomendadas",
];
const images = [
  "/assets/imagenes/alquilerkayak.webp",
  "/assets/imagenes/grupo2.webp",
  "/assets/imagenes/grupo3.webp",
  "/assets/imagenes/remando.webp",
  "/assets/imagenes/escuelita.webp",
];
export default function AlquilerKayaksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Alquiler de Kayaks
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Kayaks de alta calidad para todas las edades y niveles
          </p>
        </div>
      </section>

      {/* What’s Included + Kayak Doble */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Card Izquierda: Kayak Doble */}
            <Card className="hover:shadow-xl transition-all duration-300 w-full sm:w-[80%] mx-auto">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src="/assets/imagenes/grupo2.webp"
                    alt="Kayak Doble"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Desde $9.000
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Kayak Dobles</CardTitle>
                <p className="text-muted-foreground mb-4">
                  Ideal para compartir momentos únicos en plena conexión con la
                  naturaleza.{" "}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">2 personas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">Principiante</span>
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hola, me comunico desde la web de TKC y quiero consultar sobre el alquiler de kayak."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-500 hover:bg-red-600 flex items-center justify-center space-x-2">
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Reservar por WhatsApp</span>
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

      {/* El resto sigue igual */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Información <span className="gradient-text">Importante</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <span>Horarios</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Lunes a Domingo: 10:00 - 18:00</li>
                    <li>• Alquiler mínimo: 30 minutos</li>
                    <li>
                      • Estamos en la carpa de TKC en el secto de playa del
                      dique
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <span>Seguridad</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Instrucciones de seguridad incluidas</li>
                    <li>• Equipo revisado antes de cada uso</li>
                    <li>
                      • Personal a disposición para garantizar tu experiencia
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* carousel */}
      <GaleriaSlider images={images}></GaleriaSlider>
      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para tu <span className="gradient-text">aventura</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reserva tu kayak ahora y vive una experiencia única en las aguas de
            Tucumán
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hola, me comunico desde la web de TKC y quiero consultar sobre el alquiler de kayak."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <FaWhatsapp className="w-5 h-5" />
                Reservar Ahora
              </Button>
            </Link>
            <Link href="/servicios/excursiones">
              <Button size="lg" variant="outline">
                Ver Excursiones Guiadas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
