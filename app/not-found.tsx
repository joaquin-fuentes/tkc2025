"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/error.png"
            alt="Página no encontrada"
            width={400}
            height={400}
            className="mx-auto mb-8 text-red-600"
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ¡Uy! Página no encontrada
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Lo que estás buscando no está aquí. Capaz te perdiste remando...
          </p>

          <Link href="/">
            <Button className="text-white bg-primary hover:bg-primary/90">
              Volver al Inicio
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
