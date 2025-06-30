import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/assets/logos/logoTransparente.webp"
                alt="TKC Logo"
                width={180}
                height={180}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Tu puerta de entrada a las aventuras más emocionantes de Tucumán.
              Turismo aventura con seguridad y calidad garantizada.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/tkcturismoaventura/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/tucumankayakclub/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hola! Me comunico desde la web de TKC y quiero consultar sobre las actividades de Tucumán Kayak Club."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ubicación
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-400">+54 381 609-7754</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-400">info@tucumankayakclub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-gray-400">El Cadillal, Tucumán</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Tucumán Kayak Club. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
