"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Landmark, ShoppingBag, Heart, MessageSquare, MapPin, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/abbey", label: "L'Abbaye", icon: Landmark },
  { href: "/shop", label: "Boutique", icon: ShoppingBag },
  { href: "/news", label: "Actualités", icon: Newspaper },
  { href: "/reflection", label: "Méditations", icon: MessageSquare },
  { href: "/donations", label: "Soutien", icon: Heart },
  { href: "/contact", label: "Accès & Contact", icon: MapPin },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image 
                  src="https://www.abbaye-keur-moussa.com/wp-content/uploads/2024/12/bvcn_-transformed.png"
                  alt="Logo Keur Moussa"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="font-headline text-xl md:text-2xl font-bold text-primary tracking-tight">
                KEUR MOUSSA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-secondary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 rounded-full px-6 text-white font-bold">
              <Link href="/donations">Faire un don</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l-primary/10">
                <SheetHeader className="sr-only">
                  <SheetTitle>Menu de navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-10">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-4 text-lg font-headline hover:text-secondary p-2 transition-all"
                    >
                      <link.icon className="h-5 w-5 text-secondary" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 mt-4 rounded-full text-white font-bold">
                    <Link href="/donations" onClick={() => setIsOpen(false)}>
                      Soutenir l'Abbaye
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
