"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, Facebook, Instagram, Youtube, Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Ubicación", href: "#location" },
    { name: "Contacto", href: "#contact" },
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

          <div className="hidden md:flex items-center space-x-4">
            {["facebook", "instagram", "youtube"].map((platform) => {
              const Icon =
                platform === "facebook"
                  ? Facebook
                  : platform === "instagram"
                  ? Instagram
                  : Youtube;
              return (
                <Link
                  href={`https://${platform}.com`}
                  className={`${
                    isScrolled && theme === "dark"
                      ? "text-white hover:text-primary"
                      : linkClass()
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
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
                <div className="flex flex-col space-y-4 md:ml-6 lg:ml-10">
                  {/* Redes sociales */}
                  <div className="flex items-center space-x-4">
                    {[Facebook, Instagram, Youtube].map((Icon, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>

                  {/* Switch de tema */}
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
