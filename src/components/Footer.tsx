import Link from "next/link";
import Image from "next/image";
import { BUSINESS, MAPS_URL } from "@/lib/business";

const FacebookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const TikTokIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0B2035] text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 mb-20">
          
          {/* Left: Badge + NAP (name, address, phone, hours) */}
          <div className="flex-shrink-0 flex flex-col gap-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden bg-white transform -rotate-12 shadow-xl border-4 border-accent">
              <Image src="/logo.jpg" alt="Muelle 8 — Baja Inspired Seafood" fill sizes="160px" className="object-cover" />
            </div>
            <address className="not-italic font-inter font-light text-white/80 text-sm leading-relaxed">
              <span className="font-montserrat font-black text-white uppercase text-xs tracking-widest block mb-2">
                Visit Us
              </span>
              {BUSINESS.address.venue}<br />
              {BUSINESS.address.street}<br />
              {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.zip}<br />
              <a href={`tel:${BUSINESS.phone}`} className="hover:text-accent transition-colors">{BUSINESS.phoneDisplay}</a>
              <span className="block mt-3">
                {BUSINESS.hours.map((h) => (
                  <span key={h.days} className="block">{h.days}: {h.open} – {h.close}</span>
                ))}
              </span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-accent font-montserrat font-black uppercase text-xs tracking-widest hover:text-white transition-colors"
              >
                Get Directions
              </a>
            </address>
          </div>

          {/* Right: Links and App Store */}
          <div className="flex flex-col flex-1 w-full lg:w-auto">
            {/* Horizontal Links List */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 font-montserrat font-black uppercase text-[13px] tracking-wider text-white">
              <Link href="/order" className="hover:text-accent transition-colors">ORDER</Link>
              <Link href="/menu" className="hover:text-accent transition-colors">MENU</Link>
              <Link href="/catering" className="hover:text-accent transition-colors">CATERING</Link>
              <Link href="/gift-cards" className="hover:text-accent transition-colors">GIFT CARDS</Link>
              <Link href="/our-story" className="hover:text-accent transition-colors">OUR STORY</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">LOCATION</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">CAREERS</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">CONTACT US</Link>
            </div>
            
            {/* Social Row */}
            <div className="flex flex-col md:flex-row justify-between gap-12 border-t border-white/20 pt-12">
              {/* Connect */}
              <div>
                <h4 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-4">CONNECT WITH US</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-accent transition-colors"><FacebookIcon /></a>
                  <a href="#" className="text-white hover:text-accent transition-colors"><InstagramIcon /></a>
                  <a href="#" className="text-white hover:text-accent transition-colors"><TwitterIcon /></a>
                  <a href="#" className="text-white hover:text-accent transition-colors"><TikTokIcon /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Absolute Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 font-inter text-[10px] text-white/50 tracking-wider">
          <div>
            <p>Copyright © {new Date().getFullYear()} Muelle 8 LLC. All Rights reserved.</p>
            <p className="mt-1">
              Built by{" "}
              <a
                href="https://technologyconsultants.ventures"
                target="_blank"
                rel="nofollow sponsored"
                className="hover:text-white transition-colors"
              >
                Technology Consultants Ventures
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Do Not Sell My Personal Information</Link>
            <Link href="#" className="hover:text-white transition-colors">Website Accessibility</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
