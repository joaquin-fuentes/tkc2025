"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Zap, Users, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/constants";

const excursions = [
  {
    id: "kayak-rio",
    title: "Kayak en el Río Loro",
    description:
      "Nos encontramos en el Cadillal donde se encuentra el río Loro, ideal para iniciarse en este deporte. El río cuenta con una serie de rápidos clase 1 que nos ofrecerán adrenalina, pero al mismo tiempo, seguridad. Comenzaremos con un mini-curso instructivo a orillas del río para luego hacer un descenso de aproximadamente 1 y ½ hs.",
    duration: "4hs",
    difficulty: "Principiante",
    groupSize: "2-8 personas",
    image: "/assets/imagenes/fondokayak2.webp",
    highlights: [
      "Guía incluido",
      "Mini-curso instructivo",
      "Snack y equipo completo",
      "Recorrido de 5km por el río",
    ],
  },
  {
    id: "kayak-dique",
    title: "Kayak en el Dique",
    description:
      "Nos encontramos en El Cadillal para llegar a su gran espejo de agua, donde después de un curso instructivo remaremos en las mansas aguas del dique haciendo un recorrido por sus bahías y conociendo su hermosa naturaleza.",
    duration: "3hs",
    difficulty: "Principiante",
    groupSize: "2-60 personas",
    image: "/assets/imagenes/remando.webp",
    highlights: [
      "Guía y curso instructivo",
      "Snack y equipo completo",
      "4km de recorrido por el dique",
    ],
  },
  {
    id: "kayak-dique-rappel",
    title: "Kayak en el Dique + Rappel",
    description:
      "Remaremos en las mansas aguas del dique haciendo un recorrido por sus bahías. Al llegar a la tercera, descenderemos una pared de 15 mts. de alto con sogas y arneses para sumarle adrenalina a nuestra aventura.",
    duration: "4hs",
    difficulty: "Principiante",
    groupSize: "2-8 personas",
    image: "/assets/imagenes/rappel.webp",
    highlights: [
      "Kayak + Rappel guiado",
      "Curso previo y snack incluido",
      "4km de recorrido + descenso de 15m",
    ],
  },
  {
    id: "canyoning",
    title: "Canyoning en Aguas Chiquitas",
    description:
      "Trekking hasta el cañón de Aguas Chiquitas, cruzando piletones, escalando rocas y conviviendo con un paisaje natural impresionante hasta llegar a una cascada de 50 mts.",
    duration: "6hs",
    difficulty: "Intermedio",
    groupSize: "2-30 personas",
    image: "/assets/imagenes/trekking.webp",
    highlights: [
      "Trekking + canyoning extremo",
      "Curso previo, snack y equipo completo",
      "8km de recorrido hasta cascada de 50m",
    ],
  },
  {
    id: "canyoning-rappel",
    title: "Canyoning + Rappel",
    description:
      "Después del trekking por el cañón de Aguas Chiquitas, subimos a una cascada de 50 mts y la descendemos en rappel para una experiencia más intensa y aventurera.",
    duration: "7hs",
    difficulty: "Avanzado",
    groupSize: "2-10 personas",
    image: "/assets/imagenes/rappelac.webp",
    highlights: [
      "Canyoning + Rappel desde 50m",
      "Recorrido de 9km con paisajes únicos",
      "Snack, guía y equipo incluido",
    ],
  },
  {
    id: "rappel-saladillo",
    title: "Rappel Aéreo en el Viaducto El Saladillo",
    description:
      "Desciende en rappel desde el Viaducto El Saladillo, una estructura imponente y moderna. Una experiencia emocionante y llena de adrenalina.",
    duration: "2hs",
    difficulty: "Intermedio",
    groupSize: "2-6 personas",
    image: "/assets/imagenes/viaducto2.webp",
    highlights: [
      "Descenso de 25m desde el viaducto",
      "Guía, curso instructivo y snack",
      "Equipo profesional incluido",
    ],
  },
];

export default function ExcursionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Excursiones</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Aventuras guiadas para todos los niveles de experiencia
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {excursions.map((exc, idx) => (
              <Card
                key={exc.id}
                className="overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image src={exc.image} alt={exc.title} fill className="" />
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <CardTitle className="text-2xl md:text-3xl">
                          {exc.title}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {exc.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                        <div>
                          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">
                            {exc.duration}
                          </div>
                        </div>
                        <div>
                          <Mountain className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">
                            {exc.difficulty}
                          </div>
                        </div>
                        <div>
                          <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">
                            {exc.groupSize}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Lo que incluye:</h4>
                        <ul className="space-y-2">
                          {exc.highlights.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <Zap className="w-4 h-4 text-primary" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                            `Hola, me comunico desde la web de TKC y quiero consultar sobre la excursión "${exc.title}"`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-red-600 hover:bg-red-700 w-full flex items-center justify-center space-x-2">
                            <FaWhatsapp className="w-4 h-4" />
                            <span>Reservar por WhatsApp</span>
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿No sabes cuál elegir?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestros expertos te ayudarán a elegir la excursión perfecta según
            tu nivel y preferencias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20comunico%20desde%20la%20web%20de%20TKC%20y%20me%20gustar%C3%ADa%20consultar%20sobre%20las%20excursiones`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 flex items-center space-x-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Consultar por WhatsApp</span>
              </Button>
            </Link>
            <Link href="/#services">
              <Button
                size="lg"
                variant="outline"
                className="text-red-600 border-red-600 hover:text-red-700 hover:border-red-700"
              >
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
