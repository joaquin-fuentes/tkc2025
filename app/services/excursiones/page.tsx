import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Zap, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const excursions = [
  {
    id: "kayak-rio",
    title: "Kayak en Río",
    description: "Navega por las aguas cristalinas del río Los Sosa, rodeado de vegetación exuberante.",
    duration: "3-4 horas",
    difficulty: "Principiante",
    groupSize: "2-8 personas",
    price: "Desde $15.000",
    image: "/placeholder.svg?height=400&width=600",
    highlights: [
      "Aguas cristalinas y tranquilas",
      "Paisajes naturales únicos",
      "Guía especializado incluido",
      "Equipo completo de seguridad",
    ],
  },
  {
    id: "kayak-dique",
    title: "Kayak en Dique",
    description: "Explora las aguas del dique La Angostura con vistas panorámicas de las montañas.",
    duration: "2-3 horas",
    difficulty: "Principiante",
    groupSize: "2-10 personas",
    price: "Desde $12.000",
    image: "/placeholder.svg?height=400&width=600",
    highlights: [
      "Vistas panorámicas espectaculares",
      "Aguas calmas ideales para principiantes",
      "Fotografías incluidas",
      "Refrigerio incluido",
    ],
  },
  {
    id: "rappel",
    title: "Rappel",
    description: "Desciende por cascadas naturales en una experiencia llena de adrenalina.",
    duration: "4-5 horas",
    difficulty: "Intermedio",
    groupSize: "2-6 personas",
    price: "Desde $25.000",
    image: "/placeholder.svg?height=400&width=600",
    highlights: [
      "Cascadas de hasta 30 metros",
      "Instructores certificados",
      "Equipo técnico profesional",
      "Experiencia única en la naturaleza",
    ],
  },
  {
    id: "rappel-trekking",
    title: "Rappel + Trekking",
    description: "Combina senderismo y rappel en una aventura completa de día entero.",
    duration: "6-8 horas",
    difficulty: "Avanzado",
    groupSize: "2-6 personas",
    price: "Desde $35.000",
    image: "/placeholder.svg?height=400&width=600",
    highlights: [
      "Trekking por senderos naturales",
      "Múltiples descensos en rappel",
      "Almuerzo campestre incluido",
      "Día completo de aventura",
    ],
  },
  {
    id: "canyoning",
    title: "Canyoning",
    description: "Desciende por cañones naturales combinando rappel, saltos y natación.",
    duration: "5-6 horas",
    difficulty: "Avanzado",
    groupSize: "2-4 personas",
    price: "Desde $40.000",
    image: "/placeholder.svg?height=400&width=600",
    highlights: [
      "Descenso por cañones naturales",
      "Saltos a pozones cristalinos",
      "Técnicas mixtas de descenso",
      "Experiencia extrema única",
    ],
  },
]

export default function ExcursionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Excursiones</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Aventuras guiadas para todos los niveles de experiencia
          </p>
        </div>
      </section>

      {/* Excursions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {excursions.map((excursion, index) => (
              <Card
                key={excursion.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={excursion.image || "/placeholder.svg"}
                      alt={excursion.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-2xl md:text-3xl">{excursion.title}</CardTitle>
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {excursion.price}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">{excursion.description}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Info Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">{excursion.duration}</div>
                        </div>
                        <div className="text-center">
                          <Mountain className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">{excursion.difficulty}</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-sm font-medium">{excursion.groupSize}</div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Lo que incluye:</h4>
                        <ul className="space-y-2">
                          {excursion.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <Zap className="w-4 h-4 text-primary" />
                              <span className="text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-primary hover:bg-primary/90 flex-1">Reservar Ahora</Button>
                        <Button variant="outline" className="flex-1">
                          Más Información
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No sabes cuál elegir?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nuestros expertos te ayudarán a elegir la excursión perfecta según tu nivel y preferencias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Consultar Experto
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
