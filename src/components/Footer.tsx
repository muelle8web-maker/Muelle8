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
            
            {/* Social & Apps Row */}
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

              {/* App Stores */}
              <div>
                <h4 className="font-montserrat font-black text-white text-xs uppercase tracking-widest mb-4">GET THE MUELLE 8 APP</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-[150px] h-[46px] bg-black rounded-lg flex items-center justify-center gap-2.5 border border-white/20 hover:border-white transition-colors px-3">
                    <svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor" className="text-white shrink-0" aria-hidden="true"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    <span className="flex flex-col items-start leading-none">
                      <span className="font-inter text-[9px] text-white/70">Download on the</span>
                      <span className="font-inter font-semibold text-sm text-white">App Store</span>
                    </span>
                  </a>
                  <a href="#" className="w-[150px] h-[46px] bg-black rounded-lg flex items-center justify-center gap-2.5 border border-white/20 hover:border-white transition-colors px-3">
                    <svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor" className="text-white shrink-0" aria-hidden="true"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                    <span className="flex flex-col items-start leading-none">
                      <span className="font-inter text-[9px] text-white/70">Get it on</span>
                      <span className="font-inter font-semibold text-sm text-white">Google Play</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Absolute Bottom Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 font-inter text-[10px] text-white/50 tracking-wider">
          <p>Copyright © {new Date().getFullYear()} Muelle 8 LLC. All Rights reserved.</p>
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
