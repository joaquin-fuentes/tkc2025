"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-20 pb-12 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Por favor, leé atentamente esta información antes de contratar
            nuestros servicios.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto space-y-8 text-muted-foreground text-lg">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            1. Cambios en la Información
          </h2>
          <p>
            La información publicada en este sitio web está sujeta a cambios sin
            previo aviso. Esto incluye horarios, precios, condiciones de
            servicio y cualquier otra información relevante.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            2. Modificaciones de Precios
          </h2>
          <p>
            Los precios indicados pueden variar debido a factores operativos,
            climáticos o decisiones administrativas. Recomendamos confirmar el
            valor del servicio antes de realizar una reserva.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            3. Responsabilidad del Usuario
          </h2>
          <p>
            Al contratar nuestros servicios, el usuario declara haber leído,
            entendido y aceptado estos términos. Es responsabilidad del usuario
            asegurarse de contar con las condiciones físicas y de seguridad
            necesarias para realizar actividades al aire libre.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            4. Cancelaciones y Reembolsos
          </h2>
          <p>
            Las cancelaciones deben ser notificadas con antelación. En caso de
            condiciones climáticas adversas, Tucumán Kayak Club se reserva el
            derecho de reprogramar la actividad o realizar un reintegro parcial.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">5. Protección de Datos</h2>
          <p>
            La información personal proporcionada a través de este sitio será
            utilizada exclusivamente para fines de contacto y reserva. No
            compartimos tus datos con terceros sin tu consentimiento expreso.
          </p>
        </div>

        <p className="text-sm text-center mt-12 text-muted-foreground">
          Última actualización: {new Date().toLocaleDateString("es-AR")}
        </p>
      </section>

      <Footer />
    </main>
  );
}
