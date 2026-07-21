import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { menuSchema, breadcrumbSchema } from "@/lib/schema";
import { menuCategories } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Menu — Ceviche, Aguachile & Seafood Cocktails",
  description:
    "Muelle 8's full menu with prices: Baja-style ceviches from $9.49, aguachile, tuna tiradito, and Roger's Special seafood cocktail — made fresh to order in National City, CA.",
  alternates: { canonical: "/menu" },
};

export default function Menu() {
  return (
    <div className="min-h-screen pb-32 bg-background">
      <JsonLd data={menuSchema} />
      <JsonLd data={breadcrumbSchema("Menu", "/menu")} />

      {/* Menu Header */}
      <div className="py-24 px-6 md:px-12 text-center relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 drop-shadow-md uppercase tracking-tight">
            Our <span className="text-accent">Menu</span>
          </h1>
          <p className="text-xl font-inter font-light text-primary-foreground/90">
            Authentic Baja-inspired seafood crafted with the freshest ingredients at Market on 8th
            in National City, just south of San Diego. Every ceviche, aguachile, and tiradito is
            cured to order — never pre-mixed.
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 space-y-32">
        {menuCategories.map((category, idx) => (
          <section key={idx} className="relative z-10">
            <div className="mb-14 text-center md:text-left">
              <h2 className="font-montserrat font-bold text-4xl text-foreground mb-4 flex items-center justify-center md:justify-start gap-4 uppercase">
                {category.title}
                <span className="h-px bg-border flex-1 hidden md:block ml-4"></span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl font-inter font-light">{category.description}</p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 list-none p-0 m-0">
              {category.items.map((item, itemIdx) => (
                <li key={itemIdx} className="bg-white rounded-3xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-center group">
                  {/* Image Container */}
                  {item.image && (
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-border bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="128px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="font-montserrat font-bold text-xl text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="font-semibold text-lg text-primary shrink-0">{item.price}</span>
                    </div>
                    <p className="text-foreground/70 font-inter font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Raw seafood consumer advisory */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <p className="text-sm text-foreground/50 font-inter font-light text-center border-t border-border pt-8">
          Consuming raw or undercooked seafood may increase your risk of foodborne illness,
          especially if you have certain medical conditions.
        </p>
      </div>
    </div>
  );
}
