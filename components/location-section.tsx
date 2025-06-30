"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dónde <span className="gradient-text">Encontrarnos</span>
          </h2>
          <p className="text-lg text-muted-foreground  mx-auto">
            Estamos ubicados en El Cadillal, a solo 20 km de San Miguel de
            Tucumán, en el dique Celestino Gelsi. Desde la rotonda, tomá el
            primer desvío a la izquierda y luego doblá a la derecha. Al final de
            esa calle nos vas a encontrar, listos para vivir la aventura con
            vos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Cards */}
          <div className="space-y-6 animate-slide-in-left">
            <Card>
              <CardContent className="flex items-start space-x-4 p-6">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    A la par del Bar La Isla
                    <br />
                    El Cadillal, Tucumán, Argentina
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start space-x-4 p-6">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Horarios</h3>
                  <p className="text-muted-foreground">
                    Lunes a Domingo: 9:00 - 18:00
                    <br />
                    Reservas: 24/7 online
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start space-x-4 p-6">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Contacto</h3>
                  <p className="text-muted-foreground">
                    +54 381 609-7754
                    <br />
                    info@tucumankayakclub.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image + Map */}
          <div className="space-y-8 animate-slide-in-right h-full">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.7320325339056!2d-65.20542792381956!3d-26.62503478124678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942265fafc14b407%3A0xab872a32ac3e22b4!2sTucum%C3%A1n%20Kayak%20Club%20(TKC)!5e0!3m2!1ses!2sar!4v1750787713780!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
