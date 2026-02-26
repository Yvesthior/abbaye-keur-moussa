
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

const THEMES = ["Peace", "Gratitude", "Resilience", "Compassion", "Silence", "Faith"];

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
          alt="Reflection background"
          fill
          className="object-cover brightness-50"
          data-ai-hint={reflectionBg?.imageHint}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Inner Stillness</h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">Generate a contemplative reflection based on monastic wisdom.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-16 relative z-20">
        <Card className="border-none shadow-2xl rounded-2xl bg-white/95 backdrop-blur">
          <CardHeader className="text-center pt-10">
            <CardTitle className="font-headline text-2xl text-primary">Spiritual Reflection Generator</CardTitle>
            <CardDescription>Choose a theme or enter a phrase to inspire your prayer.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="theme">Select a Theme</Label>
                <Select onValueChange={setTheme} value={theme}>
                  <SelectTrigger className="rounded-xl border-primary/20">
                    <SelectValue placeholder="Choose a theme..." />
                  </SelectTrigger>
                  <SelectContent>
                    {THEMES.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phrase">Or provide a phrase</Label>
                <Textarea
                  placeholder="e.g. Listen with the heart..."
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
                  Generating Reflection...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Reflection
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

      {/* Philosophy Section */}
      <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
        <h3 className="font-headline text-2xl text-primary mb-4">A Tradition of Wisdom</h3>
        <p className="text-muted-foreground leading-relaxed">
          The monastic tradition teaches us to pause and listen. These reflections are meant to be a starting point for your own contemplation, bridging the ancient wisdom of the desert fathers with our modern daily lives.
        </p>
      </section>
    </div>
  );
}
