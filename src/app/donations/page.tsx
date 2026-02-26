
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, ShieldCheck, Landmark, HelpingHand } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export default function DonationsPage() {
  const [amount, setAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Thank You for Your Generosity",
        description: "Your gift helps sustain our community and its works.",
      });
    }, 1500);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Heart className="mx-auto mb-6 text-secondary" size={48} />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Support Our Mission</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Your generosity enables us to maintain the sanctuary, support our community of brothers, and continue our charitable works in the surrounding region.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Donation Form */}
        <div className="space-y-8">
          <Card className="border-none shadow-2xl rounded-2xl bg-white">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Make a Gift</CardTitle>
              <CardDescription>Select an amount and frequency for your donation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <div className="space-y-4">
                <Label className="text-base font-semibold">Donation Frequency</Label>
                <RadioGroup defaultValue="one-time" className="flex gap-4">
                  <div className="flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full border border-primary/10">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-time</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-accent/50 px-4 py-2 rounded-full border border-primary/10">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Select Amount (€)</Label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {PRESET_AMOUNTS.map((amt) => (
                    <Button
                      key={amt}
                      variant={amount === amt.toString() ? "default" : "outline"}
                      onClick={() => {
                        setAmount(amt.toString());
                        setCustomAmount("");
                      }}
                      className={`rounded-xl h-12 text-lg ${amount === amt.toString() ? 'bg-primary' : 'border-primary/20'}`}
                    >
                      {amt}
                    </Button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
                  <Input
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount("");
                    }}
                    className="pl-8 rounded-xl h-12 border-primary/20 text-lg"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <Button 
                  onClick={handleDonate} 
                  disabled={isLoading}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full h-14 text-xl font-headline"
                >
                  {isLoading ? "Processing..." : `Donate €${customAmount || amount}`}
                </Button>
                <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                  <ShieldCheck size={14} className="text-green-600" /> Secure SSL Encrypted Payment
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="space-y-12 py-4">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">Your Impact</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Each contribution plays a vital role in our monastery's ecosystem. Here's how your donation helps:
            </p>
          </div>

          <div className="grid gap-8">
            <ImpactItem
              icon={<Landmark className="text-secondary" />}
              title="Heritage Preservation"
              description="Ensuring the physical maintenance of our historic abbey buildings and our sacred lands."
            />
            <ImpactItem
              icon={<HelpingHand className="text-secondary" />}
              title="Community Support"
              description="Providing essential healthcare and education resources to the surrounding local villages."
            />
            <ImpactItem
              icon={<Heart className="text-secondary" />}
              title="Monastic Life"
              description="Supporting the simple daily living and spiritual formation of our community of brothers."
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
