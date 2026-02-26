
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
    name: "Encens Sacré - Mélange Keur Moussa",
    description: "Un mélange unique de résines et d'herbes africaines utilisé dans notre liturgie.",
    price: 10000,
    category: "Encens",
    image: PlaceHolderImages.find(img => img.id === "product-incense")?.imageUrl,
    hint: "incense resin"
  },
  {
    id: 2,
    name: "Bol en Céramique Artisanal",
    description: "Tourné et cuit individuellement dans l'atelier de l'abbaye.",
    price: 25000,
    category: "Artisanat",
    image: PlaceHolderImages.find(img => img.id === "product-craft")?.imageUrl,
    hint: "ceramic bowl"
  },
  {
    id: 3,
    name: "Miel de Fleurs d'Oranger",
    description: "Récolté dans les vergers de l'abbaye. 100% naturel et pur.",
    price: 8000,
    category: "Alimentaire",
    image: "https://picsum.photos/seed/honey/600/400",
    hint: "honey jar"
  },
  {
    id: 4,
    name: "Huile d'Olive de l'Abbaye (500ml)",
    description: "Extra vierge, pression à froid de nos oliveraies séculaires.",
    price: 12000,
    category: "Alimentaire",
    image: "https://picsum.photos/seed/oil/600/400",
    hint: "olive oil"
  },
  {
    id: 5,
    name: "CD Liturgie à la Kora",
    description: "Enregistrements originaux de la communauté, chant grégorien et Kora.",
    price: 15000,
    category: "Musique",
    image: "https://picsum.photos/seed/cd/600/400",
    hint: "music album"
  },
  {
    id: 6,
    name: "Croix en Bois Bénie",
    description: "Sculptée dans du bois local par les mains de nos frères.",
    price: 18000,
    category: "Artisanat",
    image: "https://picsum.photos/seed/cross/600/400",
    hint: "wooden cross"
  }
];

const CATEGORIES = ["Tous", "Encens", "Artisanat", "Alimentaire", "Musique"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProducts = activeCategory === "Tous" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Ajouté au panier",
      description: `${productName} a été ajouté à votre commande.`,
    });
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <Badge variant="secondary" className="mb-4 bg-secondary text-white border-none px-4 py-1">Excellence Monastique</Badge>
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-4 tracking-tight">Boutique de l'Abbaye</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
            Soutenez notre communauté en achetant des produits artisanaux de haute qualité, fabriqués dans la prière par les frères de Keur Moussa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <Tabs defaultValue="Tous" onValueChange={setActiveCategory} className="w-full">
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
                    <span className="text-lg font-bold text-secondary whitespace-nowrap">{product.price.toLocaleString()} FCFA</span>
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
                    Ajouter au panier
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
