"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Waves,
  Mountain,
  Users,
  GraduationCap,
  PartyPopper,
  Home,
  Shield,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const servicios = [
  {
    title: "Alquiler de Kayaks",
    description:
      "Kayaks de alta calidad para todas las edades y niveles de experiencia.",
    icon: Waves,
    image: "/assets/imagenes/grupo2.webp",
    href: "/servicios/alquiler-kayaks",
  },
  {
    title: "Excursiones",
    description:
      "Aventuras guiadas en río, dique, rappel, trekking y canyoning.",
    icon: Mountain,
    image: "/assets/imagenes/alquilerkayak.webp",
    href: "/servicios/excursiones",
  },
  {
    title: "Team Building",
    description: "Actividades corporativas para fortalecer equipos de trabajo.",
    icon: Users,
    image: "/assets/imagenes/coaching.webp",
    href: "/servicios/team-building",
  },
  {
    title: "Escuela de Kayaks",
    description:
      "Aprende técnicas básicas y avanzadas del kayak con instructores certificados.",
    icon: GraduationCap,
    image: "/assets/imagenes/remando.webp",
    href: "/servicios/escuela-kayaks",
  },
  {
    title: "Cumpleaños Infantiles",
    description:
      "Celebraciones únicas con actividades acuáticas seguras para niños.",
    icon: PartyPopper,
    image: "/assets/imagenes/grupo5.webp",
    href: "/servicios/cumples-infantiles",
  },
  {
    title: "Quincho para Eventos",
    description: "Espacio ideal para eventos privados con vista al dique.",
    icon: Home,
    image: "/assets/imagenes/quincho6.webp",
    href: "/servicios/quincho-eventos",
  },
  {
    title: "Guardería de Kayaks",
    description: "Servicio de almacenamiento seguro para tu kayak personal.",
    icon: Shield,
    image: "/assets/imagenes/guarderia.webp",
    href: "/servicios/guarderia-kayaks",
  },
  {
    title: "Estudiantiles",
    description: "Programas especiales y descuentos para grupos estudiantiles.",
    icon: BookOpen,
    image: "/assets/imagenes/portada3.webp",
    href: "/servicios/estudiantiles",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre todas las aventuras que tenemos preparadas para ti
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicios.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 p-2 rounded-full">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3 text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full bg-primary text-white md:bg-transparent md:text-foreground md:group-hover:bg-primary md:group-hover:text-white transition-colors"
                  >
                    Ver Detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
