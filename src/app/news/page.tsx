
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NEWS = [
  {
    id: 1,
    title: "New Kora Liturgy Recording Released",
    date: "May 15, 2024",
    category: "Announcements",
    image: "https://picsum.photos/seed/news1/800/600",
    excerpt: "We are joyful to announce the release of our latest liturgical album featuring the full Vespers service.",
    hint: "choir singing"
  },
  {
    id: 2,
    title: "Upcoming Retreat: Finding Silence",
    date: "June 10-14, 2024",
    category: "Events",
    image: "https://picsum.photos/seed/news2/800/600",
    excerpt: "Join us for a guided four-day retreat focused on the practice of silence and contemplative prayer.",
    hint: "silent retreat"
  },
  {
    id: 3,
    title: "Harvest Festival 2024",
    date: "July 22, 2024",
    category: "Community",
    image: "https://picsum.photos/seed/news3/800/600",
    excerpt: "Celebrate the bounty of our lands with us! Open day at the abbey farm with local product tasting.",
    hint: "harvest festival"
  }
];

export default function NewsPage() {
  return (
    <div className="pb-24">
      <div className="bg-primary text-primary-foreground py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">News & Events</h1>
          <p className="text-primary-foreground/70 text-lg">Stay connected with the heartbeat of Keur Moussa.</p>
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
                    Read Article <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 p-12 bg-primary rounded-3xl text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              Receive spiritual reflections and updates from the Abbey directly in your inbox. We promise to respect your silence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow h-12 rounded-full px-6 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full h-12 px-8 font-bold">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
