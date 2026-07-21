"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { MenuItem } from "@/lib/menu-data";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-square bg-[#E8ECEF] mb-4 overflow-hidden">
        {item.image && (
          <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
        )}
      </div>
      <div className="flex justify-between items-start mb-4 px-1 gap-3">
        <span className="font-inter font-medium text-primary text-[15px]">{item.name}</span>
        <span className="flex items-center gap-2 shrink-0">
          <span className="font-montserrat font-black text-primary text-[15px]">{item.price}</span>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={`${open ? "Hide" : "Show"} details for ${item.name}`}
            className="w-6 h-6 border border-border flex items-center justify-center text-primary hover:border-primary transition-colors"
          >
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </span>
      </div>
      {/* Always in the DOM (crawlable/extractable) — the toggle only affects visibility */}
      <p className={`font-inter text-primary/70 text-sm leading-relaxed mb-4 px-1 ${open ? "" : "hidden"}`}>
        {item.description}
      </p>
      <Link href="/order" className="w-full text-center bg-white border border-border/40 py-3 font-montserrat font-black text-primary uppercase text-sm tracking-widest hover:border-primary transition-colors shadow-sm mt-auto">
        ORDER
      </Link>
    </div>
  );
}
