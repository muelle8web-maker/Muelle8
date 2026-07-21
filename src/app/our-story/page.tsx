import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Anchor, Fish, Heart } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Story — From the Piers of Baja to National City",
  description:
    "Muelle 8 means Pier 8: a family-run Baja seafood counter bringing dock-fresh ceviche and aguachile to Market on 8th in National City, in the San Diego South Bay.",
  alternates: { canonical: "/our-story" },
};

const values = [
  {
    icon: Anchor,
    title: "Rooted in Baja",
    text: "Our recipes come straight from the coastal kitchens of Baja California — bright citrus, fresh chiles, and seafood that never sits still.",
  },
  {
    icon: Fish,
    title: "Fresh Every Day",
    text: "Ceviche, aguachile, and tiradito are cured to order, never pre-mixed. If it's not fresh enough to serve raw, it doesn't make the menu.",
  },
  {
    icon: Heart,
    title: "Family Made",
    text: "Muelle 8 is family-run, from the marinades to the counter. Every plate is a little piece of home.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="min-h-screen pb-32 bg-background">
      <JsonLd data={breadcrumbSchema("Our Story", "/our-story")} />
      {/* Header */}
      <div className="py-24 px-6 md:px-12 text-center relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 drop-shadow-md uppercase tracking-tight">
            Our <span className="text-accent">Story</span>
          </h1>
          <p className="text-xl font-inter font-light text-primary-foreground/90">
            From the docks of Baja to Market on 8th.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/hero.jpg" alt="The Baja California coast" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-montserrat font-bold text-4xl mb-6 text-foreground uppercase">
              Muelle 8 Means <span className="text-accent-dark">Pier 8</span>
            </h2>
            <p className="text-lg text-foreground/70 font-inter font-light leading-relaxed mb-6">
              Every morning on the piers of Baja California, fishermen unload the day&apos;s
              catch while the whales pass offshore. That&apos;s the moment our name — and our
              whale-tail logo — comes from: the freshest possible seafood, straight off the dock.
            </p>
            <p className="text-lg text-foreground/70 font-inter font-light leading-relaxed">
              We bring that same standard north. Our ceviches, aguachiles, and cocteles are
              made to order with the citrus-forward, chile-bright flavors of the peninsula.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/aguachile.jpg" alt="Fresh aguachile at Muelle 8" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="lg:order-1">
            <h2 className="font-montserrat font-bold text-4xl mb-6 text-foreground uppercase">
              Find Us at Market on 8th
            </h2>
            <p className="text-lg text-foreground/70 font-inter font-light leading-relaxed mb-8">
              We serve out of the Market on 8th food hall in National City — a counter, a
              cutting board, and the day&apos;s catch. Come by for a Roger&apos;s Special,
              stay for the aguachile.
            </p>
            <Link href="/contact" className="inline-block bg-accent text-accent-foreground px-8 py-3 font-montserrat font-black uppercase tracking-widest text-sm hover:bg-accent-dark transition-colors">
              Visit Us
            </Link>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white rounded-3xl border border-border p-8 shadow-sm text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-5">
                <value.icon size={26} />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-3 uppercase">{value.title}</h3>
              <p className="text-foreground/70 font-inter font-light leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
