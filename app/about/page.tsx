import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Target, Eye, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Brindar experiencias de turismo aventura únicas y seguras, conectando a las personas con la naturaleza de Tucumán.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Ser el referente en turismo aventura de la región, promoviendo el cuidado del medio ambiente y el desarrollo sostenible.",
    },
    {
      icon: Zap,
      title: "Valores",
      description:
        "Seguridad, respeto por la naturaleza, profesionalismo, diversión y compromiso con nuestros clientes.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Conoce la historia y el equipo detrás de TKC
          </p>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Image
              src="/assets/imagenes/equipotkc.webp"
              alt="Equipo TKC"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl mx-auto animate-bounce-in"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
              Nuestra <span className="gradient-text">Historia</span>
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground animate-slide-in-left">
              <p className="text-lg leading-relaxed mb-6">
                ¡Bienvenidos a Tucumán Kayak Club (TKC), donde convertimos
                simples momentos en emocionantes aventuras! Con más de 15 años
                de trayectoria en Turismo Activo y deportes alternativos, nos
                especializamos en brindar experiencias seguras, personalizadas y
                llenas de diversión.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Nuestro equipo está conformado por profesionales apasionados y
                capacitados en primeros auxilios, seguridad y rescate, tanto en
                aguas blancas como en entornos agrestes. Además, contamos con
                gran experiencia en el manejo de grupos y atención al cliente.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Disponemos de una flota de 30 kayaks dobles con todos los
                elementos de seguridad homologados, y de equipamiento completo
                para realizar rappel. Operamos con habilitación oficial del Ente
                Autárquico Tucumán Turismo, cumpliendo con todos los requisitos
                legales y seguros.
              </p>

              <p className="text-lg leading-relaxed">
                ¡Únete a nosotros y descubrí un mundo de aventuras inolvidables
                en plena naturaleza!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
            Nuestros <span className="gradient-text">Principios</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center p-8 hover:shadow-xl transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <value.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-muted-foreground">
                  Aventureros Satisfechos
                </div>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-muted-foreground">
                  Satisfacción Garantizada
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            ¿Listo para tu próxima{" "}
            <span className="gradient-text">aventura</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a nosotros y descubre por qué somos la mejor opción para
            turismo aventura en Tucumán
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#services">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Ver Servicios
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline">
                Contactanos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
