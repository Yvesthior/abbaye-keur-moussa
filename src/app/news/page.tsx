
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NEWS = [
  {
    id: 1,
    title: "Nouvel album de Liturgie à la Kora",
    date: "15 Mai 2024",
    category: "Annonces",
    image: "https://picsum.photos/seed/news1/800/600",
    excerpt: "Nous sommes joyeux d'annoncer la sortie de notre dernier album liturgique présentant l'intégralité du service des Vêpres.",
    hint: "choir singing"
  },
  {
    id: 2,
    title: "Prochaine Retraite : Trouver le Silence",
    date: "10-14 Juin 2024",
    category: "Événements",
    image: "https://picsum.photos/seed/news2/800/600",
    excerpt: "Rejoignez-nous pour une retraite guidée de quatre jours axée sur la pratique du silence et de la prière contemplative.",
    hint: "silent retreat"
  },
  {
    id: 3,
    title: "Fête des Récoltes 2024",
    date: "22 Juillet 2024",
    category: "Communauté",
    image: "https://picsum.photos/seed/news3/800/600",
    excerpt: "Célébrez l'abondance de nos terres avec nous ! Journée porte ouverte à la ferme de l'abbaye avec dégustation de produits locaux.",
    hint: "harvest festival"
  }
];

export default function NewsPage() {
  return (
    <div className="pb-24">
      <div className="bg-primary text-primary-foreground py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Actualités & Événements</h1>
          <p className="text-primary-foreground/70 text-lg">Restez connectés au battement de cœur de Keur Moussa.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <Card key={item.id} className="border-none shadow-lg overflow-hidden flex flex-col rounded-2xl group bg-white">
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={item.hint}
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-white border-none">{item.category}</Badge>
              </div>
              <CardHeader className="pt-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <CardTitle className="font-headline text-2xl text-primary leading-tight group-hover:text-secondary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="pb-8">
                <Button variant="link" asChild className="text-secondary p-0 h-auto group-hover:translate-x-1 transition-transform">
                  <Link href={`/news/${item.id}`} className="flex items-center gap-2">
                    Lire l'article <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24 p-12 bg-primary rounded-3xl text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl font-bold">S'abonner à la Newsletter</h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              Recevez des réflexions spirituelles et des nouvelles de l'Abbaye directement dans votre boîte mail. Nous promettons de respecter votre silence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow h-12 rounded-full px-6 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full h-12 px-8 font-bold">
                Nous Rejoindre
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
