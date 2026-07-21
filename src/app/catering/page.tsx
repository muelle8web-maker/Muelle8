import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { FORMSPREE } from "@/lib/business";

export const metadata: Metadata = {
  title: "Catering — Baja Seafood for Events",
  description:
    "Seafood catering in National City and the San Diego area: ceviche trays, aguachile, and coctel platters from Muelle 8 for game days, office lunches, and family gatherings.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return (
    <div className="min-h-screen pb-32 bg-background">
      <JsonLd data={breadcrumbSchema("Catering", "/catering")} />
      {/* Catering Header */}
      <div className="py-24 px-6 md:px-12 text-center relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 drop-shadow-md uppercase tracking-tight">
            Baja <span className="text-accent">Catering</span>
          </h1>
          <p className="text-xl font-inter font-light text-primary-foreground/90">
            Bring the vibrant flavors of the coast to your next event.
          </p>
        </div>
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 md:px-12 mt-16 relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm">
          <p className="text-foreground/80 font-inter font-light leading-relaxed mb-10 text-center text-lg">
            Whether it&apos;s a corporate lunch, a family gathering, or a special celebration, Muelle 8 has you covered. 
            Fill out the form below and our team will get back to you within 24 hours to plan your perfect menu.
          </p>

          <form action={`https://formspree.io/f/${FORMSPREE.cateringId}`} method="POST" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Full Name</label>
                <input type="text" id="name" name="name" className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter placeholder:text-foreground/40" placeholder="John Doe" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Email Address</label>
                <input type="email" id="email" name="email" className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter placeholder:text-foreground/40" placeholder="john@example.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Event Date</label>
                <input type="date" id="date" name="date" className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Estimated Guests</label>
                <input type="number" id="guests" name="guests" className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter placeholder:text-foreground/40" placeholder="50" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Event Details & Requests</label>
              <textarea id="details" name="details" rows={5} className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter placeholder:text-foreground/40 resize-none" placeholder="Tell us about your event..." required></textarea>
            </div>

            <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold font-montserrat text-lg py-4 rounded-full hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-md uppercase tracking-wider mt-4">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
