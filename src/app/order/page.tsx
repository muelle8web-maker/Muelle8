import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShoppingBag } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Order Online — Pickup & Delivery",
  description:
    "Order Muelle 8 for pickup at Market on 8th in National City or get Baja seafood delivered through DoorDash.",
  alternates: { canonical: "/order" },
};

export default function OrderPage() {
  return (
    <div className="bg-background min-h-screen py-24 px-6 md:px-12 flex flex-col items-center">
      <JsonLd data={breadcrumbSchema("Order Online", "/order")} />
      <div className="max-w-4xl w-full text-center space-y-16">
        
        <div className="space-y-6">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-foreground tracking-tight">Order <span className="text-accent">Online</span></h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-inter font-light">
            Craving Muelle 8? Order directly from us for pickup, or choose delivery through our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Direct Pickup Card */}
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-between text-center group">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShoppingBag size={32} />
            </div>
            <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">Direct Pickup</h2>
            <p className="text-foreground/70 mb-8 font-inter font-light leading-relaxed">
              Order ahead and skip the line. Pick up your food hot and fresh directly from our spot inside Market on 8th.
            </p>
            <button 
              className="bg-primary text-primary-foreground font-montserrat font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full w-full hover:bg-primary/90 transition-colors shadow-sm"
            >
              Start Pickup Order
            </button>
          </div>

          {/* DoorDash Delivery Card */}
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-border hover:shadow-md hover:border-[#FF3008]/20 transition-all duration-300 flex flex-col items-center justify-between text-center group">
            <div className="w-16 h-16 bg-[#FF3008]/10 text-[#FF3008] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M5 10h14"/>
                 <path d="M5 14h14"/>
                 <path d="M2 5h20v14H2z"/>
              </svg>
            </div>
            <h2 className="font-montserrat font-bold text-2xl text-foreground mb-4">Delivery</h2>
            <p className="text-foreground/70 mb-8 font-inter font-light leading-relaxed">
              Want Muelle 8 delivered to your door? Order through DoorDash for fast and reliable delivery.
            </p>
            <Link 
              href="https://www.doordash.com/store/muelle-8-seafood-national-city-48017278/112982572/?event_type=autocomplete&pickup=false"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF3008] text-white font-montserrat font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full w-full hover:bg-[#D62806] transition-colors shadow-sm flex justify-center items-center gap-2"
            >
              Order on DoorDash <ExternalLink size={18} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
