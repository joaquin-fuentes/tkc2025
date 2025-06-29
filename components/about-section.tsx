"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="gradient-text">Nosotros</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos una empresa de Turismo Aventura con base en El Cadillal y
              más de 15 años de experiencia en Turismo Activo. Nuestro equipo
              certificado brinda experiencias seguras, divertidas y conectadas
              con la naturaleza.
              <br />
              <br />
              Contamos con 30 kayaks dobles y equipo completo para rappel.
              Estamos habilitados por el Ente Tucumán Turismo y operamos con
              todos los permisos y seguros requeridos.
              <br />
              <br />
              ¡Viví una aventura única con nosotros!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Aventureros
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Años de experiencia
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfacción
                  </div>
                </CardContent>
              </Card>
            </div>

            <Link href="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Conocer Más
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <Image
                src="/assets/imagenes/portada2.webp"
                alt="TKC Team"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg p-2">
                <Image
                  src="/assets/logos/logoTransparente.webp"
                  alt="TKC Team"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
