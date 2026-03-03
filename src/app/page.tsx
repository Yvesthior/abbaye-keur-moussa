
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <Badge className="mb-6 bg-primary text-white px-6 py-1 text-sm uppercase tracking-widest border-none">
            Abbaye Bénédictine au Sénégal
          </Badge>
          <h1 className="font-headline text-5xl md:text-8xl font-bold mb-6 tracking-tight">
            La Paix de Keur Moussa
          </h1>
          <p className="text-xl md:text-2xl font-body mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto italic">
            "Chercher Dieu dans le silence, le travail et la louange à la Kora."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg font-bold">
              <Link href="/contact">Venir nous voir</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white rounded-full px-10 h-14 text-lg">
              <Link href="/abbey">Notre Histoire</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Horaires et Célébrations - Modèle Demandé */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-muted py-4 mb-12 text-center rounded-sm">
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-widest text-foreground">
              HORAIRES ET CÉLÉBRATIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonne Semaine */}
            <div className="space-y-4">
              <h3 className="text-primary font-bold text-sm uppercase mb-4 h-12 flex items-center">
                LUNDI, MARDI, MERCREDI, JEUDI ET VENDREDI
              </h3>
              <div className="border rounded-sm overflow-hidden">
                <ScheduleRow label="Vigiles" time="05h20" isHeader />
                <ScheduleRow label="Laudes, Messe et Tierce" time="07h30" />
                <ScheduleRow label="Sexte" time="12h15" />
                <ScheduleRow label="None" time="14h45" />
                <ScheduleRow label="Vêpres" time="18h30 (sauf mar & ven 17h30, jeu 19h)" />
                <ScheduleRow label="Complies" time="20h30" />
              </div>
            </div>

            {/* Colonne Samedi */}
            <div className="space-y-4">
              <h3 className="text-primary font-bold text-sm uppercase mb-4 h-12 flex items-center">
                SAMEDI
              </h3>
              <div className="border rounded-sm overflow-hidden">
                <ScheduleRow label="Vigiles" time="05h20" isHeader />
                <ScheduleRow label="Laudes" time="07h30" />
                <ScheduleRow label="Tierce, Messe et Sexte" time="11h15" />
                <ScheduleRow label="None" time="14h45" />
                <ScheduleRow label="Vêpres" time="17h30" />
                <ScheduleRow label="Complies" time="20h30" />
              </div>
            </div>

            {/* Colonne Dimanche */}
            <div className="space-y-4">
              <h3 className="text-primary font-bold text-sm uppercase mb-4 h-12 flex items-center">
                DIMANCHE ET SOLENNITÉ
              </h3>
              <div className="border rounded-sm overflow-hidden">
                <ScheduleRow label="Vigiles" time="05h20" isHeader />
                <ScheduleRow label="Laudes" time="08h" />
                <ScheduleRow label="Messe et Tierce" time="10h (Solennité en sem. 10h45)" />
                <ScheduleRow label="Sexte" time="12h15" />
                <ScheduleRow label="None" time="13h40" />
                <ScheduleRow label="Vêpres" time="17h30" />
                <ScheduleRow label="Repas" time="19h" />
                <ScheduleRow label="Complies" time="20h30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos Pratiques & Boutique */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card className="border-none shadow-md">
              <CardContent className="p-8 flex items-start gap-6">
                 <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <ShoppingBag size={24} />
                 </div>
                 <div className="space-y-3">
                    <h3 className="font-headline text-2xl font-bold">La Boutique Monastique</h3>
                    <p className="text-muted-foreground text-sm">
                       Ouverte tous les jours de <strong>08:30 à 17:30</strong>. 
                       Retrouvez notre miel, nos huiles et l'artisanat des frères.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto text-primary font-bold">
                       <Link href="/shop" className="flex items-center gap-2">Visiter la boutique <ChevronRight size={16} /></Link>
                    </Button>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-none shadow-md">
              <CardContent className="p-8 flex items-start gap-6">
                 <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin size={24} />
                 </div>
                 <div className="space-y-3">
                    <h3 className="font-headline text-2xl font-bold">Accès & Contact</h3>
                    <p className="text-muted-foreground text-sm">
                       Sébikotane, à 50km de Dakar. Pour toute retraite spirituelle, 
                       veuillez nous contacter à l'avance au <strong>+221 33 836 33 33</strong>.
                    </p>
                    <Button asChild variant="link" className="p-0 h-auto text-primary font-bold">
                       <Link href="/contact" className="flex items-center gap-2">Plus d'informations <ChevronRight size={16} /></Link>
                    </Button>
                 </div>
              </CardContent>
           </Card>
        </div>
      </section>

      {/* Actualités Récentes */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-2">Vie de la Communauté</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <Button asChild variant="link" className="text-primary font-bold">
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

      {/* Soutenir */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Heart className="mx-auto text-white h-12 w-12" />
          <h2 className="font-headline text-4xl font-bold">Soutenir l'Abbaye</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            Vos dons nous aident à entretenir ce lieu sacré et à poursuivre nos missions sociales au Sénégal.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 h-16 text-xl font-bold">
            <Link href="/donations">Faire un Don (FCFA)</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ScheduleRow({ label, time, isHeader = false }: { label: string, time: string, isHeader?: boolean }) {
  return (
    <div className={`flex justify-between items-center px-4 py-3 border-b last:border-0 ${isHeader ? 'bg-accent/50' : 'bg-white'}`}>
      <span className={`text-sm ${isHeader ? 'font-bold' : 'font-medium'}`}>{label}</span>
      <span className="text-sm font-bold text-right ml-4">{time}</span>
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
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{date}</p>
        <h4 className="font-headline text-2xl text-foreground leading-tight mb-4">{title}</h4>
        <Button variant="link" asChild className="text-primary p-0 h-auto font-bold mt-auto group-hover:translate-x-1 transition-transform">
          <Link href={href} className="flex items-center gap-2">
            Lire la suite <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
