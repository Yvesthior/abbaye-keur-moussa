
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Music, Heart, ShoppingBag, BookOpen, Clock, MapPin, Landmark } from "lucide-react";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-abbey");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Abbaye de Keur Moussa"
          fill
          className="object-cover"
          priority
          data-ai-hint="monastery abbey"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Paix et Contemplation
          </h1>
          <p className="text-lg md:text-xl font-body mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Bienvenue au cœur de la spiritualité bénédictine au Sénégal. Un havre de prière, de travail et de silence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-12">
              <Link href="/contact">Venir à l'Abbaye</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white rounded-full px-8 h-12">
              <Link href="/abbey">Notre Histoire</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Critical Info Strip */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <Clock className="mx-auto text-secondary h-8 w-8" />
            <h3 className="font-headline text-xl font-bold">Messe Quotidienne</h3>
            <p className="text-sm opacity-80">Lun-Sam: 08:00 | Dimanche: 10:00 (Messe chantée)</p>
          </div>
          <div className="space-y-2">
            <Music className="mx-auto text-secondary h-8 w-8" />
            <h3 className="font-headline text-xl font-bold">Vêpres à la Kora</h3>
            <p className="text-sm opacity-80">Tous les soirs à 18:30</p>
          </div>
          <div className="space-y-2">
            <MapPin className="mx-auto text-secondary h-8 w-8" />
            <h3 className="font-headline text-xl font-bold">Accès</h3>
            <p className="text-sm opacity-80">Sébikotane, à 50km de Dakar</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-primary mb-4">La Vie du Sanctuaire</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="La Boutique"
              description="Produits artisanaux : encens, miel, huile d'olive et artisanat d'art fabriqués par les frères."
              icon={<ShoppingBag className="w-6 h-6" />}
              href="/shop"
            />
            <FeatureCard
              title="Méditation IA"
              description="Recevez une parole de sagesse inspirée de la règle de Saint Benoît pour votre journée."
              icon={<BookOpen className="w-6 h-6" />}
              href="/reflection"
            />
            <FeatureCard
              title="Nous Soutenir"
              description="Aidez l'Abbaye à maintenir son sanctuaire et ses œuvres sociales dans la région."
              icon={<Heart className="w-6 h-6" />}
              href="/donations"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-accent/30 text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-headline text-3xl italic leading-relaxed mb-6">
            "Écoute, fils, les préceptes du maître et incline l'oreille de ton cœur."
          </p>
          <p className="uppercase tracking-widest text-sm font-bold text-secondary">— Règle de Saint Benoît</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href: string }) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group rounded-2xl bg-white">
      <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
        <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-secondary mb-2 transition-transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="font-headline text-2xl font-bold text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button variant="link" asChild className="text-secondary group-hover:translate-x-1 transition-transform p-0 h-auto">
          <Link href={href} className="flex items-center gap-2 font-bold">
            En savoir plus <ArrowRight size={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
