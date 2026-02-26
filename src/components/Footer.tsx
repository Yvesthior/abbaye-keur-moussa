
import Link from "next/link";
import { Landmark, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Landmark size={24} className="text-secondary" />
            <span className="font-headline text-2xl font-bold tracking-tight">KEUR MOUSSA</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Abbaye bénédictine au Sénégal, dédiée à la prière, au travail et à la communauté dans l'esprit de Saint Benoît.
          </p>
          <div className="flex space-x-4 pt-4">
            <Link href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-secondary">Navigation</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link href="/abbey" className="hover:text-white transition-colors">L'Abbaye</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Boutique</Link></li>
            <li><Link href="/news" className="hover:text-white transition-colors">Actualités</Link></li>
            <li><Link href="/donations" className="hover:text-white transition-colors">Soutenir</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-secondary">Vie Spirituelle</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link href="/reflection" className="hover:text-white transition-colors">Méditations</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Pèlerinages</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Intentions de prière</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-bold mb-6 text-secondary">Contact</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="shrink-0 mt-0.5" />
              <span>Abbaye de Keur Moussa, BP 3169, Dakar, Sénégal</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="shrink-0" />
              <span>+221 33 836 33 33</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="shrink-0" />
              <span>contact@keurmoussa.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Abbaye de Keur Moussa. Tous droits réservés.
      </div>
    </footer>
  );
}
