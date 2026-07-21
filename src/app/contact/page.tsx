import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS, MAPS_URL, FORMSPREE } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact & Location — Market on 8th, National City",
  description:
    "Find Muelle 8 inside Market on 8th food hall: 41 E 8th St, Ste 115, National City, CA 91950. Open daily from 11 AM — call, email, or get directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-32 bg-background">
      <JsonLd data={breadcrumbSchema("Contact Us", "/contact")} />
      {/* Contact Header */}
      <div className="py-24 px-6 md:px-12 text-center relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 drop-shadow-md uppercase tracking-tight">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl font-inter font-light text-primary-foreground/90">
            We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-10 mt-4">
            <h2 className="font-montserrat font-bold text-4xl mb-8 text-foreground flex items-center gap-4 uppercase">
              Get in Touch
              <span className="h-px bg-border flex-1 hidden sm:block ml-4"></span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <div className="pt-1">
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">Location</h3>
                  <p className="text-foreground/80 font-inter font-light text-lg leading-relaxed">
                    {BUSINESS.address.venue}<br />
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.zip}
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-montserrat font-bold text-sm text-accent-dark uppercase tracking-wide underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Clock size={28} />
                </div>
                <div className="pt-1">
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">Hours</h3>
                  <p className="text-foreground/80 font-inter font-light text-lg leading-relaxed">
                    Mon - Thu: 11:00 AM - 8:00 PM<br/>
                    Fri - Sun: 11:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div className="pt-1">
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">Phone</h3>
                  <p className="text-foreground/80 font-inter font-light text-lg leading-relaxed">
                    <a href={`tel:${BUSINESS.phone}`} className="hover:text-primary transition-colors">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div className="pt-1">
                  <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">Email</h3>
                  <p className="text-foreground/80 font-inter font-light text-lg leading-relaxed">
                    <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary transition-colors">{BUSINESS.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm">
            <h3 className="font-montserrat font-bold text-3xl mb-8 text-foreground uppercase">Send a Message</h3>
            <form action={`https://formspree.io/f/${FORMSPREE.contactId}`} method="POST" className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Name</label>
                <input type="text" id="name" name="name" className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter placeholder:text-foreground/40" placeholder="Jane Doe" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Email</label>
                <input type="email" id="email" name="email" className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter placeholder:text-foreground/40" placeholder="jane@example.com" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-montserrat font-semibold text-sm text-foreground uppercase tracking-wide">Message</label>
                <textarea id="message" name="message" rows={5} className="bg-muted border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter placeholder:text-foreground/40 resize-none" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold font-montserrat text-lg py-4 rounded-full hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 shadow-md uppercase tracking-wider mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
