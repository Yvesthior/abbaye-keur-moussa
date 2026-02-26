
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
        title: "Message Sent",
        description: "We have received your enquiry and will respond soon.",
      });
    }, 1500);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Visit & Contact</h1>
          <p className="text-primary-foreground/70 text-lg">We welcome visitors and pilgrims to share in our silence and prayer.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Contact Info & Visit Advice */}
        <div className="lg:col-span-1 space-y-12">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary">Get in Touch</h2>
            <div className="space-y-6">
              <ContactLink icon={<MapPin className="text-secondary" />} label="Address" value="Abbaye de Keur Moussa, Senegal" />
              <ContactLink icon={<Phone className="text-secondary" />} label="Phone" value="+221 33 836 33 33" />
              <ContactLink icon={<Mail className="text-secondary" />} label="Email" value="contact@keurmoussa.com" />
              <ContactLink icon={<Clock className="text-secondary" />} label="Opening Hours" value="Daily 08:00 - 18:00" />
            </div>
          </div>

          <Card className="bg-accent/30 border-none rounded-2xl p-6">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Info size={24} className="text-secondary" />
                <h3 className="font-headline text-xl font-bold">Practical Advice</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As a place of prayer, we kindly ask visitors to respect the silence of the grounds and dress modestly. Please check the schedule for liturgical celebrations if you wish to join us for prayer.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-primary flex items-center gap-3">
              <Compass className="text-secondary" /> Directions
            </h3>
            <div className="bg-muted rounded-2xl h-[300px] flex items-center justify-center border border-primary/10 relative overflow-hidden">
               <div className="absolute inset-0 bg-slate-200 flex items-center justify-center italic text-muted-foreground">
                 Interactive Map Placeholder
               </div>
               <div className="relative z-10 p-4 bg-white/80 rounded-xl m-4 text-xs">
                 Located 50km from Dakar, near Sebikotane.
               </div>
            </div>
          </div>
        </div>

        {/* Contact Form & FAQ */}
        <div className="lg:col-span-2 space-y-16">
          <div className="space-y-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5">
            <h2 className="font-headline text-3xl font-bold text-primary">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="rounded-xl h-12 border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl h-12 border-primary/20" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Pilgrimage Inquiry" required className="rounded-xl h-12 border-primary/20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" required className="min-h-[150px] rounded-xl border-primary/20" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 text-lg font-headline">
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-primary hover:text-secondary">Can I stay overnight at the Abbey?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we have a guesthouse for those seeking a retreat. We offer a limited number of rooms for individuals or small groups. Please contact us at least two weeks in advance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-primary hover:text-secondary">What time are the sung services?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The Mass is celebrated daily at 8:00 AM (Sundays at 10:00 AM) and Vespers is sung at 6:30 PM. These are the best times to hear the Kora and Gregorian chants.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-primary hover:text-secondary">Is there an entrance fee to visit?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Entrance to the abbey grounds and the church is free for all. However, we appreciate donations to help with the upkeep of the sanctuary.
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
