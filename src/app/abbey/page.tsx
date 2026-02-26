
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export default function AbbeyPage() {
  const dailyImg = PlaceHolderImages.find(img => img.id === "daily-life");

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">La Communauté de l'Abbaye</h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-body">Fondée en 1963, un phare de foi et de développement au Sénégal.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-20 space-y-24">
        {/* Histoire */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden">
             <Image 
                src="https://picsum.photos/seed/hist1/600/800" 
                alt="Vue historique" 
                fill 
                className="object-cover"
                data-ai-hint="old monastery"
              />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">Une Fondation Visionnaire</h2>
            <p className="text-muted-foreground leading-relaxed">
              En 1961, des moines de l'Abbaye de Solesmes en France sont arrivés au Sénégal à l'invitation des autorités sénégalaises. Leur mission : planter la graine du monachisme bénédictin en terre ouest-africaine.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En 1963, le monastère a été officiellement établi. Depuis lors, il est devenu une communauté vibrante où des frères de diverses origines partagent une vie commune de prière et de service, profondément enracinée dans la culture africaine.
            </p>
          </div>
        </section>

        <Separator className="bg-primary/5" />

        {/* Mission */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline text-3xl font-bold text-primary">Notre Mission</h2>
            <p className="text-muted-foreground italic">"Chercher Dieu véritablement, servir fidèlement la communauté locale."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent/30 p-8 rounded-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-primary">Croissance Spirituelle</h3>
              <p className="text-sm text-muted-foreground">À travers la célébration de la Liturgie des Heures et les chants à la Kora, nous maintenons un dialogue constant avec le Divin.</p>
            </div>
            <div className="bg-accent/30 p-8 rounded-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-primary">Intendance Agricole</h3>
              <p className="text-sm text-muted-foreground">Nous cultivons nos terres, produisant des fruits, des légumes et de l'élevage pour nous soutenir et partager avec les villages environnants.</p>
            </div>
            <div className="bg-accent/30 p-8 rounded-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-primary">Fusion Culturelle</h3>
              <p className="text-sm text-muted-foreground">Fusionner des siècles de traditions monastiques occidentales avec le riche héritage musical et artisanal du Sénégal.</p>
            </div>
          </div>
        </section>

        <Separator className="bg-primary/5" />

        {/* Vie Quotidienne */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">La Journée Monastique</h2>
            <p className="text-muted-foreground leading-relaxed">
              La vie d'un moine est structurée par les cloches. Des Vigiles à 4h30 au Complies à la tombée de la nuit, la journée est un équilibre rythmé entre prière (Lectio Divina), silence et travail communautaire.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>04:30 – Vigiles : La première prière du jour</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>08:00 – Tierce & Messe Conventuelle</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>09:00 – Travail du matin</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>12:15 – Sexte & Déjeuner commun</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>18:30 – Vêpres : Louange du soir à la Kora</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
             <Image 
                src={dailyImg?.imageUrl || ""} 
                alt="Vie quotidienne monastique" 
                fill 
                className="object-cover"
                data-ai-hint={dailyImg?.imageHint}
              />
          </div>
        </section>
      </div>
    </div>
  );
}
