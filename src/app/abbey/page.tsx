
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
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">The Abbey Community</h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-body">Founded in 1963, a beacon of faith and development.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-20 space-y-24">
        {/* History Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden">
             <Image 
                src="https://picsum.photos/seed/hist1/600/800" 
                alt="Historic view" 
                fill 
                className="object-cover"
                data-ai-hint="old monastery"
              />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">A Visionary Foundation</h2>
            <p className="text-muted-foreground leading-relaxed">
              In 1961, monks from the Abbey of Solesmes in France arrived in Senegal at the invitation of the Senegalese authorities. Their mission: to plant the seed of Benedictine monasticism in West African soil.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By 1963, the monastery was officially established. Since then, it has grown into a vibrant community where brothers of various origins share a common life of prayer and service, deeply rooted in African culture.
            </p>
          </div>
        </section>

        <Separator className="bg-primary/5" />

        {/* Mission Section */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-muted-foreground italic">"To seek God truly, to serve the local community faithfully."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent/30 p-8 rounded-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-primary">Spiritual Growth</h3>
              <p className="text-sm text-muted-foreground">Through the celebration of the Liturgy of the Hours and Gregorian/Kora chants, we maintain a constant dialogue with the Divine.</p>
            </div>
            <div className="bg-accent/30 p-8 rounded-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-primary">Agricultural Stewardship</h3>
              <p className="text-sm text-muted-foreground">We cultivate our lands, producing fruit, vegetables, and livestock to support ourselves and share with the surrounding villages.</p>
            </div>
            <div className="bg-accent/30 p-8 rounded-2xl space-y-4">
              <h3 className="font-headline text-xl font-bold text-primary">Cultural Fusion</h3>
              <p className="text-sm text-muted-foreground">Merging centuries-old Western monastic traditions with the rich musical and artisanal heritage of Senegal.</p>
            </div>
          </div>
        </section>

        <Separator className="bg-primary/5" />

        {/* Daily Life Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">The Monastic Day</h2>
            <p className="text-muted-foreground leading-relaxed">
              A monk's life is structured by the bells. From Vigils at 4:30 AM to Compline at nightfall, the day is a rhythmic balance of prayer (Lectio Divina), silence, and communal work.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>04:30 – Vigils: The first prayer of the day</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>08:00 – Terce & Conventual Mass</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>09:00 – Morning Work Period</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>12:15 – Sext & Common Lunch</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>18:30 – Vespers: Evening praise with Kora</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
             <Image 
                src={dailyImg?.imageUrl || ""} 
                alt="Monastic Daily Life" 
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
