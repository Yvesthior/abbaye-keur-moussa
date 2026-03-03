
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  ArrowRight, 
  Music, 
  Heart, 
  ShoppingBag, 
  BookOpen, 
  Clock, 
  MapPin, 
  Calendar, 
  Phone,
  Info,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-abbey");

  return (
    <div className="flex flex-col">
      {/* Section Héro */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Abbaye de Keur Moussa"
          fill
          className="object-cover"
          priority
          data-ai-hint="monastery abbey"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <Badge className="mb-6 bg-secondary hover:bg-secondary/90 text-white px-6 py-1 text-sm uppercase tracking-widest border-none">
            Abbaye Bénédictine au Sénégal
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl">
            La Paix de Keur Moussa
          </h1>
          <p className="text-xl md:text-2xl font-body mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto italic">
            "Chercher Dieu dans le silence, le travail et la louange à la Kora."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 h-14 text-lg font-bold shadow-xl">
              <Link href="/contact">Venir nous voir</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white rounded-full px-10 h-14 text-lg">
              <Link href="/abbey">Notre Histoire</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bloc Horaires et Infos - Inspiration Paroisse */}
      <section className="relative z-20 -mt-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-primary text-primary-foreground p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="text-secondary h-8 w-8" />
              <h2 className="font-headline text-3xl font-bold">Horaires des Offices</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-medium">Messe de semaine</span>
                <span className="font-bold">08:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2 text-secondary">
                <span className="font-bold">Messe du Dimanche</span>
                <span className="font-bold underline">10:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-medium">Vêpres (Kora)</span>
                <span className="font-bold">18:30</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-medium">Vigiles</span>
                <span className="font-bold">04:30</span>
              </div>
            </div>
            <p className="text-xs opacity-60 italic mt-4">Tous les offices sont chantés et ouverts à tous dans le respect du silence.</p>
          </div>

          <div className="bg-white p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 mb-4 text-primary">
              <ShoppingBag className="text-secondary h-8 w-8" />
              <h2 className="font-headline text-3xl font-bold">La Boutique</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ouverte tous les jours de <span className="font-bold text-primary">08:30 à 17:30</span>.
              Retrouvez nos produits : miel, huiles, kora, et artisanat monastique.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full w-full">
                <Link href="/shop" className="flex items-center justify-center gap-2">
                  Voir le catalogue <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-accent text-accent-foreground p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="text-secondary h-8 w-8" />
              <h2 className="font-headline text-3xl font-bold">Accès & Contact</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 opacity-70" />
                <p>Sébikotane, à 50km de Dakar sur la route de Thiès.</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 opacity-70" />
                <p>+221 33 836 33 33</p>
              </div>
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 shrink-0 opacity-70" />
                <p>Retraites sur réservation préalable.</p>
              </div>
            </div>
            <div className="pt-4 text-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full w-full">
                <Link href="/contact">Plan d'accès complet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités Récentes */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-2">Vie de la Communauté</h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>
            <Button asChild variant="link" className="text-secondary font-bold">
              <Link href="/news" className="flex items-center gap-2">Toutes les actus <ArrowRight size={16} /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard 
              title="Nouvel album de Kora"
              date="15 Mai 2024"
              image="https://picsum.photos/seed/kora1/600/400"
              href="/news/1"
            />
            <NewsCard 
              title="Récolte des mangues"
              date="2 Juin 2024"
              image="https://picsum.photos/seed/mango/600/400"
              href="/news/2"
            />
            <NewsCard 
              title="Pèlerinage diocésain"
              date="20 Juin 2024"
              image="https://picsum.photos/seed/church/600/400"
              href="/news/3"
            />
          </div>
        </div>
      </section>

      {/* Services Spéciaux */}
      <section className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline text-4xl font-bold text-primary">Un Lieu de Ressourcement</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Abbaye accueille ceux qui souhaitent s'extraire de l'agitation du monde pour un temps de silence et de prière. Notre hôtellerie est ouverte aux retraitants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <BookOpen size={20} />
                </div>
                <span className="font-bold">Retraites individuelles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Music size={20} />
                </div>
                <span className="font-bold">Liturgie à la Kora</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Heart size={20} />
                </div>
                <span className="font-bold">Accompagnement</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Calendar size={20} />
                </div>
                <span className="font-bold">Sessions spirituelles</span>
              </div>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              <Link href="/reflection">Découvrir la Méditation IA</Link>
            </Button>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://picsum.photos/seed/silence/800/1000" 
              alt="Silence et prière" 
              fill 
              className="object-cover"
              data-ai-hint="meditation silence"
            />
          </div>
        </div>
      </section>

      {/* Faire un don */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <Heart className="mx-auto text-secondary h-16 w-16 mb-4 animate-pulse" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Soutenir notre mission</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            L'Abbaye vit de son travail et de votre générosité. Vos dons nous aident à entretenir ce lieu sacré et à soutenir nos actions sociales dans la région.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-16 text-xl font-bold shadow-2xl">
            <Link href="/donations">Faire un Don (FCFA)</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function NewsCard({ title, date, image, href }: { title: string, date: string, image: string, href: string }) {
  return (
    <Card className="border-none shadow-lg overflow-hidden flex flex-col rounded-2xl group bg-white hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pt-6">
        <p className="text-xs text-secondary font-bold uppercase tracking-wider mb-2">{date}</p>
        <CardTitle className="font-headline text-2xl text-primary leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Button variant="link" asChild className="text-primary p-0 h-auto font-bold group-hover:translate-x-1 transition-transform">
          <Link href={href} className="flex items-center gap-2">
            Lire la suite <ArrowRight size={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
