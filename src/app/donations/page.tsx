
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, ShieldCheck, Landmark, HelpingHand } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PRESET_AMOUNTS = [5000, 10000, 25000, 50000, 100000];

export default function DonationsPage() {
  const [amount, setAmount] = useState<string>("10000");
  const [customAmount, setCustomAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Merci pour votre générosité",
        description: "Votre don aide à soutenir notre communauté et ses œuvres.",
      });
    }, 1500);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Heart className="mx-auto mb-6 text-secondary" size={48} />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Soutenir l'Abbaye</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Votre générosité nous permet d'entretenir le sanctuaire, de soutenir nos frères et de poursuivre nos actions sociales dans la région de Sébikotane.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Donation Form */}
        <div className="space-y-8">
          <Card className="border-none shadow-2xl rounded-2xl bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Faire un don</CardTitle>
              <CardDescription>Choisissez le montant et la fréquence de votre soutien.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Fréquence du don</Label>
                <RadioGroup defaultValue="one-time" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full border border-primary/10">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">Une fois</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full border border-primary/10">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Mensuel</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Montant (FCFA)</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PRESET_AMOUNTS.map((amt) => (
                    <Button
                      key={amt}
                      variant={amount === amt.toString() ? "default" : "outline"}
                      onClick={() => {
                        setAmount(amt.toString());
                        setCustomAmount("");
                      }}
                      className={`rounded-xl h-12 ${amount === amt.toString() ? 'bg-primary' : 'border-primary/20'}`}
                    >
                      {amt.toLocaleString()}
                    </Button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">FCFA</span>
                  <Input
                    placeholder="Montant personnalisé"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount("");
                    }}
                    className="pr-16 rounded-xl h-12 border-primary/20 text-lg"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <Button 
                  onClick={handleDonate} 
                  disabled={isLoading}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full h-14 text-xl font-headline"
                >
                  {isLoading ? "Traitement..." : `Donner ${(customAmount || amount).toLocaleString()} FCFA`}
                </Button>
                <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                  <ShieldCheck size={14} className="text-green-600" /> Paiement sécurisé SSL
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="space-y-12 py-4">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">Votre Impact</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Chaque contribution est vitale pour l'équilibre de notre monastère et son rayonnement :
            </p>
          </div>

          <div className="grid gap-8">
            <ImpactItem
              icon={<Landmark className="text-secondary" />}
              title="Entretien du Patrimoine"
              description="Préservation des bâtiments historiques et de nos terres sacrées."
            />
            <ImpactItem
              icon={<HelpingHand className="text-secondary" />}
              title="Soutien Social"
              description="Aide aux villages environnants en matière de santé et d'éducation."
            />
            <ImpactItem
              icon={<Heart className="text-secondary" />}
              title="Vie Monastique"
              description="Assurer la vie simple et la formation spirituelle des frères."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-headline text-xl font-bold text-primary mb-1">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
