
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Music, Heart, ShoppingBag, BookOpen } from "lucide-react";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-abbey");
  const dailyLifeImg = PlaceHolderImages.find(img => img.id === "daily-life");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg?.imageUrl || ""}
          alt={heroImg?.description || "Keur Moussa Abbey"}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            A Sanctuary of Peace and Prayer
          </h1>
          <p className="text-lg md:text-xl font-body mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Discover the Benedictine spiritual heritage in the heart of Senegal. Join us in a journey of contemplation, community, and service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-12">
              <Link href="/abbey">Discover the Abbey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white rounded-full px-8 h-12">
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-accent rounded-full text-secondary text-sm font-semibold">
                Welcome to Keur Moussa
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                Ora et Labora: Prayer and Work in Harmony
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 1963, the Abbey of Keur Moussa is a haven of spiritual depth. Our community follows the Rule of St. Benedict, balancing intense prayer with the joyful work of our hands. We are renowned for our unique liturgical music and our dedication to the land.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col space-y-2">
                  <Music className="text-secondary h-8 w-8 mb-2" />
                  <h4 className="font-headline text-xl font-bold">Kora Liturgy</h4>
                  <p className="text-sm text-muted-foreground">Unique fusion of Gregorian chant and African instruments.</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Heart className="text-secondary h-8 w-8 mb-2" />
                  <h4 className="font-headline text-xl font-bold">Community</h4>
                  <p className="text-sm text-muted-foreground">Dedicated to local development and spiritual hospitality.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={dailyLifeImg?.imageUrl || ""}
                alt={dailyLifeImg?.description || "Daily Life"}
                fill
                className="object-cover"
                data-ai-hint={dailyLifeImg?.imageHint}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-primary mb-4">Engage with Our Community</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Monastic Shop"
              description="Browse our collection of hand-crafted incense, organic food, and sacred crafts made by the brothers."
              icon={<ShoppingBag className="w-6 h-6" />}
              href="/shop"
            />
            <FeatureCard
              title="Daily Reflection"
              description="Find spiritual solace with our AI-powered reflection generator based on monastic wisdom."
              icon={<BookOpen className="w-6 h-6" />}
              href="/reflection"
            />
            <FeatureCard
              title="Support Our Mission"
              description="Help us maintain the sanctuary and continue our social and spiritual works in the region."
              icon={<Heart className="w-6 h-6" />}
              href="/donations"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <Landmark size={600} />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="font-headline text-3xl md:text-4xl italic leading-relaxed mb-8">
            "Listen with the ear of your heart."
          </p>
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-4"></div>
          <p className="uppercase tracking-widest text-sm font-semibold text-secondary">Rule of Saint Benedict</p>
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
          <Link href={href} className="flex items-center gap-2">
            Learn More <ArrowRight size={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

import { Landmark } from "lucide-react";
