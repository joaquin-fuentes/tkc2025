"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, Facebook, Instagram, Sun, Moon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme === "dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTheme(enabled ? "dark" : "light");
  }, [enabled]);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Servicios", href: "#servicios" },
    { name: "Ubicación", href: "#location" },
    { name: "Contacto", href: "#contact" },
  ];

  const socialLinks = [
    {
      platform: "facebook",
      href: "https://www.facebook.com/tkcturismoaventura/",
      Icon: Facebook,
    },
    {
      platform: "instagram",
      href: "https://www.instagram.com/tucumankayakclub/?hl=es",
      Icon: Instagram,
    },
    {
      platform: "whatsapp",
      href: `https://wa.me/543816097754?text=Hola!%20Me%20comunico%20desde%20la%20web%20de%20TKC%20y%20quiero%20consultar%20sobre%20las%20actividades%20de%20Tucumán%20Kayak%20Club.`,
      Icon: FaWhatsapp,
    },
  ];
  const linkClass = () =>
    `transition-colors duration-200 font-medium ${
      isScrolled
        ? theme === "dark"
          ? "text-white hover:text-black"
          : "text-primary hover:text-black"
        : "text-white hover:text-black"
    }`;
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={
                theme === "dark"
                  ? "/assets/logos/logoTransparente.webp"
                  : isScrolled
                  ? "/assets/logos/logoLetraRojaBB.webp"
                  : "/assets/logos/logoTransparente.webp"
              }
              alt="TKC Logo"
              width={120}
              height={120}
              className="shrink-0 transition-all duration-300"
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={linkClass()}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Redes y switch Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ href, Icon, platform }) => (
              <Link
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isScrolled && theme === "dark"
                    ? "text-white hover:text-primary"
                    : linkClass()
                }`}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}

            {/* Switch Tema */}
            <div className="flex items-center space-x-4 ml-10">
              <Sun
                className={`w-4 h-4 ${
                  !isScrolled
                    ? "text-white"
                    : theme === "dark"
                    ? "text-white"
                    : "text-primary"
                }`}
              />
              <Switch
                checked={enabled}
                onCheckedChange={setEnabled}
                className="data-[state=checked]:bg-primary"
              />
              <Moon
                className={`w-4 h-4 ${
                  !isScrolled
                    ? "text-white"
                    : theme === "dark"
                    ? "text-white"
                    : "text-primary"
                }`}
              />
            </div>
          </div>

          {/* Menú Mobile */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                {/* Redes Mobile */}
                <div className="flex items-center space-x-4 pt-4">
                  {socialLinks.map(({ href, Icon, platform }) => (
                    <Link
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>

                {/* Switch Tema Mobile */}
                <div className="flex items-center space-x-2 pt-2 border-t border-muted-foreground/30 mt-2">
                  <Sun className="w-4 h-4 text-primary" />
                  <Switch
                    checked={enabled}
                    onCheckedChange={setEnabled}
                    className="data-[state=checked]:bg-primary"
                  />
                  <Moon className="w-4 h-4 text-primary" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
