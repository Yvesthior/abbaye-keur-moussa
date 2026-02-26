
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Info, Compass } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé",
        description: "Nous avons bien reçu votre demande et vous répondrons prochainement.",
      });
    }, 1500);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Visite & Contact</h1>
          <p className="text-primary-foreground/70 text-lg">Nous accueillons les visiteurs et pèlerins pour partager notre silence et notre prière.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Info Contact */}
        <div className="lg:col-span-1 space-y-12">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary">Nous Contacter</h2>
            <div className="space-y-6">
              <ContactLink icon={<MapPin className="text-secondary" />} label="Adresse" value="Abbaye de Keur Moussa, Sénégal" />
              <ContactLink icon={<Phone className="text-secondary" />} label="Téléphone" value="+221 33 836 33 33" />
              <ContactLink icon={<Mail className="text-secondary" />} label="Email" value="contact@keurmoussa.com" />
              <ContactLink icon={<Clock className="text-secondary" />} label="Horaires d'accueil" value="Tous les jours 08:00 - 18:00" />
            </div>
          </div>

          <Card className="bg-accent/30 border-none rounded-2xl p-6">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Info size={24} className="text-secondary" />
                <h3 className="font-headline text-xl font-bold">Conseils Pratiques</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                En tant que lieu de prière, nous demandons aimablement aux visiteurs de respecter le silence des lieux et de porter une tenue décente. Veuillez consulter les horaires liturgiques si vous souhaitez vous joindre à nous pour la prière.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-primary flex items-center gap-3">
              <Compass className="text-secondary" /> Itinéraire
            </h3>
            <div className="bg-muted rounded-2xl h-[300px] flex items-center justify-center border border-primary/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center italic text-muted-foreground text-center px-4">
                 Emplacement : À 50km de Dakar, près de Sébikotane.
               </div>
            </div>
          </div>
        </div>

        {/* Formulaire & FAQ */}
        <div className="lg:col-span-2 space-y-16">
          <div className="space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5">
            <h2 className="font-headline text-3xl font-bold text-primary">Envoyer un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" required className="rounded-xl h-12 border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required className="rounded-xl h-12 border-primary/20" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Demande de pèlerinage" required className="rounded-xl h-12 border-primary/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Comment pouvons-nous vous aider ?" required className="min-h-[150px] rounded-xl border-primary/20" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg font-headline">
                {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary">Questions Fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-primary hover:text-secondary">Puis-je séjourner à l'Abbaye ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Oui, nous disposons d'une hôtellerie pour ceux qui cherchent une retraite spirituelle. Nous offrons un nombre limité de chambres pour des individus ou des petits groupes. Veuillez nous contacter au moins deux semaines à l'avance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-primary hover:text-secondary">À quelle heure sont les services chantés ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  La messe est célébrée quotidiennement à 08h00 (dimanche à 10h00) et les vêpres sont chantées à 18h30. Ce sont les meilleurs moments pour entendre les chants à la Kora et les chants grégoriens.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-primary hover:text-secondary">Y a-t-il des frais d'entrée pour la visite ?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  L'entrée de l'abbaye et de l'église est libre pour tous. Cependant, nous apprécions les dons pour aider à l'entretien du sanctuaire.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactLink({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-accent/50 rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-lg font-headline text-primary font-bold">{value}</p>
      </div>
    </div>
  );
}
