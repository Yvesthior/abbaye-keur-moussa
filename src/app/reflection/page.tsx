
"use client";

import { useState } from "react";
import { generateSpiritualReflection } from "@/ai/flows/generate-spiritual-reflection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Quote, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const THEMES = ["Paix", "Gratitude", "Résilience", "Compassion", "Silence", "Foi"];

export default function ReflectionPage() {
  const [theme, setTheme] = useState("");
  const [phrase, setPhrase] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!theme && !phrase) return;
    setIsLoading(true);
    setResult(null);
    try {
      const output = await generateSpiritualReflection({ theme, phrase });
      setResult(output.reflection);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const reflectionBg = PlaceHolderImages.find(img => img.id === "reflection-bg");

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src={reflectionBg?.imageUrl || ""}
          alt="Méditation"
          fill
          className="object-cover brightness-50"
          data-ai-hint="serene nature"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Méditation Intérieure</h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">Générez une parole de sagesse inspirée de la tradition monastique.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-16 relative z-20">
        <Card className="border-none shadow-2xl rounded-2xl bg-white/95 backdrop-blur">
          <CardHeader className="text-center pt-10">
            <CardTitle className="font-headline text-2xl text-primary">Générateur de Méditation</CardTitle>
            <CardDescription>Choisissez un thème ou entrez une pensée pour inspirer votre prière.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="theme">Thème</Label>
                <Select onValueChange={setTheme} value={theme}>
                  <SelectTrigger className="rounded-xl border-primary/20">
                    <SelectValue placeholder="Choisir un thème..." />
                  </SelectTrigger>
                  <SelectContent>
                    {THEMES.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phrase">Ou une pensée libre</Label>
                <Textarea
                  placeholder="ex: Écouter avec le cœur..."
                  value={phrase}
                  onChange={(e) => setPhrase(e.target.value)}
                  className="rounded-xl border-primary/20 min-h-[44px]"
                />
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isLoading || (!theme && !phrase)}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg shadow-lg transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Génération en cours...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Générer une Méditation
                </>
              )}
            </Button>

            {result && (
              <div className="mt-12 p-8 bg-accent/30 rounded-2xl relative animate-in fade-in zoom-in-95 duration-500">
                <Quote className="absolute -top-4 -left-2 text-secondary h-10 w-10 opacity-20" />
                <div className="font-headline text-2xl md:text-3xl text-primary leading-relaxed text-center italic">
                  {result}
                </div>
                <div className="w-12 h-1 bg-secondary mx-auto mt-6 rounded-full opacity-50"></div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
