"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border z-50 relative h-24 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="pl-4 lg:pl-8 h-full flex items-center">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-sm">
            <Image src="/logo.jpg" alt="Muelle 8 Logo" fill sizes="64px" className="object-cover" />
          </div>
          <span className="font-montserrat font-black text-2xl uppercase tracking-widest text-primary hidden md:block mt-1">Muelle 8</span>
        </Link>
      </div>

      {/* Center: Main Navigation */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-inter font-bold text-primary uppercase text-[13px] tracking-wide mt-1">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-accent-dark transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right: Blocky Order Buttons + Mobile Toggle */}
      <div className="flex h-full items-center">
        <div className="flex h-full border-l border-border/20">
          <Link
            href="/catering"
            className="hidden sm:flex flex-col items-center justify-center h-full px-6 md:px-8 bg-white text-primary font-montserrat font-black uppercase text-xs tracking-wider text-center border-r border-border hover:bg-muted transition-colors"
          >
            <span>Order</span>
            <span>Catering</span>
          </Link>
          <Link
            href="/order"
            className="flex flex-col items-center justify-center h-full px-6 md:px-10 bg-primary text-primary-foreground font-montserrat font-black uppercase text-xs tracking-wider text-center hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <span>Order</span>
            <span>Now</span>
          </Link>
        </div>
        <button
          className="lg:hidden px-4 text-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg flex flex-col font-inter font-bold text-primary uppercase text-sm tracking-wide">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-8 py-4 border-t border-border/40 hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
