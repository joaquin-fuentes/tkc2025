"use client";

import React from "react";
import { useForm } from "react-hook-form";
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
import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EMAIL, WHATSAPP_NUMBER, WHATSAPP_NUMBER_VIEW } from "@/constants";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    reset();
    alert("¡Mensaje enviado! Te contactaremos pronto.");
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
              {/* Teléfono */}
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-muted-foreground">{WHATSAPP_NUMBER_VIEW}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">{EMAIL}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Dirección */}
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      {...register("name", {
                        required: "El nombre es obligatorio",
                        minLength: {
                          value: 2,
                          message: "Debe tener al menos 2 caracteres",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu email"
                      {...register("email", {
                        required: "El email es obligatorio",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Formato de email inválido",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tu mensaje"
                      rows={5}
                      {...register("message", {
                        required: "El mensaje es obligatorio",
                        minLength: {
                          value: 10,
                          message:
                            "El mensaje debe tener al menos 10 caracteres",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="block w-full">
                          <Button
                            type="button"
                            className="w-full bg-primary/70 cursor-not-allowed"
                            size="lg"
                            disabled
                          >
                            Enviar Mensaje
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Este formulario está en construcción. Pronto estará
                          funcional.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
              href="https://www.facebook.com/tkcturismoaventura/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/tucumankayakclub/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hola! Me comunico desde la web de TKC y quiero consultar sobre las actividades de Tucumán Kayak Club."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
