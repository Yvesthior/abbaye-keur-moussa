
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Info } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { toast } from "@/hooks/use-toast";

const PRODUCTS = [
  {
    id: 1,
    name: "Sacred Incense - Keur Moussa Blend",
    description: "A unique blend of resin and African herbs used in our daily liturgy.",
    price: 15.00,
    category: "Incense",
    image: PlaceHolderImages.find(img => img.id === "product-incense")?.imageUrl,
    hint: "incense resin"
  },
  {
    id: 2,
    name: "Handcrafted Ceramic Bowl",
    description: "Individually turned and fired in our monastery workshop.",
    price: 35.00,
    category: "Crafts",
    image: PlaceHolderImages.find(img => img.id === "product-craft")?.imageUrl,
    hint: "ceramic bowl"
  },
  {
    id: 3,
    name: "Pure Orange Blossom Honey",
    description: "Harvested from our monastery orchards. 100% natural and raw.",
    price: 12.50,
    category: "Food",
    image: "https://picsum.photos/seed/honey/600/400",
    hint: "honey jar"
  },
  {
    id: 4,
    name: "Abbey Olive Oil (500ml)",
    description: "Cold-pressed extra virgin olive oil from our ancient groves.",
    price: 18.00,
    category: "Food",
    image: "https://picsum.photos/seed/oil/600/400",
    hint: "olive oil"
  },
  {
    id: 5,
    name: "Liturgical Chants CD - Kora & Voice",
    description: "Original recordings of our community's world-renowned Kora liturgy.",
    price: 20.00,
    category: "Music",
    image: "https://picsum.photos/seed/cd/600/400",
    hint: "music album"
  },
  {
    id: 6,
    name: "Blessed Wooden Cross",
    description: "Carved from local wood by the hands of our brothers.",
    price: 25.00,
    category: "Crafts",
    image: "https://picsum.photos/seed/cross/600/400",
    hint: "wooden cross"
  }
];

const CATEGORIES = ["All", "Incense", "Crafts", "Food", "Music"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Basket",
      description: `${productName} has been added to your order.`,
    });
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4 bg-secondary text-white border-none px-4 py-1">Monastic Excellence</Badge>
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">The Abbey Shop</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
            Support our community by purchasing high-quality artisanal products made with prayer and care by the brothers of Keur Moussa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <Tabs defaultValue="All" onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-accent/50 p-1 rounded-full overflow-x-auto flex-nowrap">
              {CATEGORIES.map(cat => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="rounded-full px-8 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image || ""}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    data-ai-hint={product.hint}
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white">{product.category}</Badge>
                </div>
                <CardHeader className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-headline text-xl font-bold text-primary">{product.name}</CardTitle>
                    <span className="text-lg font-bold text-secondary">€{product.price.toFixed(2)}</span>
                  </div>
                  <CardDescription className="text-sm line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter className="pb-6 gap-3">
                  <Button 
                    onClick={() => handleAddToCart(product.name)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full h-11"
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-primary/20 text-primary hover:bg-accent/50 h-11 w-11">
                    <Heart size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tabs>

        {/* Info Banner */}
        <div className="mt-24 p-8 bg-secondary/10 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-secondary/20">
          <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shrink-0">
            <Info size={32} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Artisanal Quality & Ethical Sourcing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every purchase directly funds the upkeep of the monastery and our local development initiatives in Senegal. We prioritize sustainable practices and traditional craftsmanship in every item we produce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
