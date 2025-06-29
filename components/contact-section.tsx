"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("¡Mensaje enviado! Te contactaremos pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contactanos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para tu próxima aventura? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <div className="space-y-4 md:space-y-8 mb-8">
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-muted-foreground">+54 381 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      info@tucumankayakclub.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <MapPin className="w-6 h-6 text-primary" />
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
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tu mensaje"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Social Links */}
        <div className="mt-12 md:mt-4 flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-4">Síguenos en Redes</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://instagram.com"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://youtube.com"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
