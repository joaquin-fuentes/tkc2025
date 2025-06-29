import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const kayakTypes = [
  {
    name: "Kayak Individual",
    description: "Perfecto para aventureros solitarios que buscan libertad total",
    price: "Desde $8.000/día",
    capacity: "1 persona",
    difficulty: "Principiante",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Kayak Doble",
    description: "Ideal para parejas o amigos que quieren compartir la experiencia",
    price: "Desde $12.000/día",
    capacity: "2 personas",
    difficulty: "Principiante",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Kayak Familiar",
    description: "Espacioso y estable, perfecto para familias con niños",
    price: "Desde $15.000/día",
    capacity: "2-3 personas",
    difficulty: "Principiante",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const included = [
  "Kayak en excelente estado",
  "Remo profesional",
  "Chaleco salvavidas",
  "Bidón estanco",
  "Instrucciones básicas",
  "Mapa de rutas recomendadas",
]

export default function AlquilerKayaksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Alquiler de Kayaks</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-in-left">
            Kayaks de alta calidad para todas las edades y niveles
          </p>
        </div>
      </section>

      {/* Kayak Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tipos de <span className="gradient-text">Kayaks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra el kayak perfecto para tu aventura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {kayakTypes.map((kayak, index) => (
              <Card
                key={kayak.name}
                className="hover:shadow-xl transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={kayak.image || "/placeholder.svg"}
                      alt={kayak.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">{kayak.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3">{kayak.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{kayak.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">{kayak.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm">{kayak.difficulty}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">Reservar Ahora</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              ¿Qué <span className="gradient-text">Incluye</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Equipo incluido"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>

              <div>
                <ul className="space-y-4">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Info */}
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
                    <li>• Lunes a Domingo: 9:00 - 18:00</li>
                    <li>• Alquiler mínimo: 2 horas</li>
                    <li>• Reserva con 24hs de anticipación</li>
                    <li>• Cancelación gratuita hasta 12hs antes</li>
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
                    <li>• Apoyo telefónico durante la actividad</li>
                    <li>• Seguro de responsabilidad civil</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para tu <span className="gradient-text">aventura</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reserva tu kayak ahora y vive una experiencia única en las aguas de Tucumán
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Reservar Ahora
              </Button>
            </Link>
            <Link href="/services/excursiones">
              <Button size="lg" variant="outline">
                Ver Excursiones Guiadas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
