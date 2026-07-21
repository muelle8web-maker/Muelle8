import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Gift, Store, Mail } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ADDRESS_LINE } from "@/lib/business";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give the gift of fresh Baja seafood — Muelle 8 gift cards from $25, available at our counter inside Market on 8th in National City, CA.",
  alternates: { canonical: "/gift-cards" },
};

const amounts = ["$25", "$50", "$75", "$100"];

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen pb-32 bg-background">
      <JsonLd data={breadcrumbSchema("Gift Cards", "/gift-cards")} />
      {/* Header */}
      <div className="py-24 px-6 md:px-12 text-center relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 drop-shadow-md uppercase tracking-tight">
            Gift <span className="text-accent">Cards</span>
          </h1>
          <p className="text-xl font-inter font-light text-primary-foreground/90">
            Give the gift of fresh Baja seafood.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Gift card visual */}
          <div className="relative">
            <div className="aspect-[8/5] rounded-3xl bg-primary shadow-2xl p-8 flex flex-col justify-between overflow-hidden relative">
              {/* wave accent along the bottom */}
              <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,24 C50,36 100,12 150,24 C200,36 250,12 300,24 C350,36 400,12 400,24 L400,40 L0,40 Z" fill="#FF7E67" />
              </svg>
              <div className="flex items-center justify-between relative z-10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/80 shadow-md">
                  <Image src="/logo.jpg" alt="Muelle 8 logo" fill sizes="64px" className="object-cover" />
                </div>
                <Gift className="text-accent" size={32} />
              </div>
              <div className="relative z-10 pb-10">
                <p className="font-montserrat font-black text-white text-3xl uppercase tracking-widest">Muelle 8</p>
                <p className="font-inter text-white/70 text-sm tracking-wide">Baja Inspired Seafood · Gift Card</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full bg-accent hidden md:flex items-center justify-center -rotate-12 shadow-xl">
              <span className="font-montserrat font-black text-accent-foreground text-xs uppercase text-center leading-tight">Any<br />Occasion</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-montserrat font-bold text-4xl mb-6 text-foreground uppercase">
              A Taste of Baja, To Go
            </h2>
            <p className="text-lg text-foreground/70 font-inter font-light leading-relaxed mb-8">
              Perfect for birthdays, thank-yous, or anyone who loves fresh ceviche and aguachile.
              Available in any amount you like.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {amounts.map((amount) => (
                <span key={amount} className="px-6 py-3 rounded-full border-2 border-primary font-montserrat font-black text-primary text-lg">
                  {amount}
                </span>
              ))}
              <span className="px-6 py-3 rounded-full border-2 border-dashed border-primary/40 font-montserrat font-bold text-primary/60 text-lg">
                Custom
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-primary/5 p-3 rounded-2xl text-primary"><Store size={24} /></div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-foreground">Buy In Store</h3>
                  <p className="text-foreground/70 font-inter font-light">
                    Pick one up at our counter — {ADDRESS_LINE}.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-primary/5 p-3 rounded-2xl text-primary"><Mail size={24} /></div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-foreground">eGift Cards Coming Soon</h3>
                  <p className="text-foreground/70 font-inter font-light">
                    Digital gift cards are on the way. <Link href="/contact" className="text-accent-dark font-medium underline underline-offset-4 hover:text-primary transition-colors">Contact us</Link> to be the first to know.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
