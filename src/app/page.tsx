import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MenuItemCard from "@/components/MenuItemCard";
import HeroCarousel from "@/components/HeroCarousel";
import { featuredItems } from "@/lib/menu-data";

export default function Home() {
  return (
    <div className="min-h-screen pb-0">
      {/* 1. Full-Width Hero Carousel */}
      <section className="relative w-full">
        <HeroCarousel />
      </section>

      {/* Nautical wave divider: navy banner rolls into the off-white section */}
      <div className="w-full bg-primary" aria-hidden="true">
        <svg className="block w-full h-10 md:h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,32 C120,52 240,12 360,32 C480,52 600,12 720,32 C840,52 960,12 1080,32 C1200,52 1320,12 1440,32 L1440,60 L0,60 Z" fill="#F4F6F8" />
        </svg>
      </div>

      {/* 2. Three-Card Highlight Section */}
      <section className="bg-[#F4F6F8] w-full pt-16 pb-16 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "CATERING MADE EASY", desc: "From office lunches to family celebrations, we've got your next event covered.", cta: "START HERE", href: "/catering", img: "/images/tacos.jpg" },
            { title: "WE'RE GOING BIG!", desc: "Yeah... we heard you. More fresh seafood, bigger sides, and zero extra cost. Now that's a win!", cta: "ORDER NOW", href: "/order", img: "/images/rogers-cocktail.png" },
            { title: "$7+ LUNCH MENU", desc: "10 meal options starting at just $7. Featuring our NEW Fish Tacos for just $7.99!", cta: "ORDER NOW", href: "/order", img: "/images/ceviche.jpg" }
          ].map((card, i) => (
            <div key={i} className="flex flex-col rounded-[24px] overflow-hidden shadow-lg bg-primary">
              <div className="relative w-full h-64 bg-white">
                <Image src={card.img} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-montserrat font-black text-white text-2xl uppercase mb-3">{card.title}</h3>
                  <p className="font-inter text-white/90 text-[15px] leading-relaxed">{card.desc}</p>
                </div>
                <Link href={card.href} className="mt-8 font-montserrat font-black text-accent uppercase text-[15px] tracking-wider hover:text-sand underline decoration-2 underline-offset-4 transition-colors">
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Dive Into The Menu Section */}
      <section className="bg-[#F4F6F8] w-full pb-24 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Header & Horizontal Nav */}
          <div className="mb-12 border-b border-border/20 pb-4">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
              <h2 className="font-montserrat font-black text-4xl uppercase text-primary tracking-tighter">
                DIVE INTO THE MENU.
              </h2>
              <Link href="/menu" className="font-montserrat font-black text-primary text-sm uppercase flex items-center gap-1 tracking-widest hover:text-accent-dark transition-colors">
                VIEW ALL <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-8 font-montserrat font-black uppercase text-sm tracking-wider">
              <Link href="#" className="text-primary border-b-4 border-primary pb-2">NEW - ESPECIALES</Link>
              <Link href="#" className="text-primary/60 hover:text-primary pb-2">TACOS</Link>
              <Link href="#" className="text-primary/60 hover:text-primary pb-2">CEVICHE</Link>
              <Link href="#" className="text-primary/60 hover:text-primary pb-2">COCTELES</Link>
              <Link href="#" className="text-primary/60 hover:text-primary pb-2">SHAREABLES</Link>
            </div>
          </div>

          {/* Borderless 4-Column Grid — items come verbatim from the real menu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Split Promo Section (Like "The Best Parties Happen In Baja") */}
      <section className="w-full">
        {/* Top Image + Float box */}
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image src="/images/seafoodfest.png" alt="Catering" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
            <div className="bg-accent/90 backdrop-blur-sm p-10 md:p-14 max-w-lg shadow-2xl">
              <h2 className="font-montserrat font-black text-primary text-4xl md:text-5xl uppercase leading-tight mb-6 tracking-tighter">
                THE BEST PARTIES HAPPEN IN BAJA.
              </h2>
              <p className="font-inter text-primary/90 text-lg mb-8 leading-relaxed font-medium">
                From game-day watch parties to large corporate meetings, Muelle 8 makes it easy to cater your every gathering with fresh seafood.
              </p>
              <Link href="/catering" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-montserrat font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-colors">
                ORDER CATERING
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom 50/50 Split */}
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-full">
            <Image src="/images/aguachile.jpg" alt="Join Our Team" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 bg-primary p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-montserrat font-black text-white text-4xl md:text-5xl uppercase leading-tight mb-6 tracking-tighter">
              BRING YOUR FLAVOR
            </h2>
            <p className="font-inter text-white/90 text-lg mb-8 leading-relaxed max-w-md">
              Check out our team for yourself. Muelle 8 is a great place to work if you need flexible hours or want to begin a rewarding career. Either way, it would be great to meet you.
            </p>
            <div>
              <Link href="/contact" className="inline-block text-center bg-accent text-accent-foreground px-8 py-3 font-montserrat font-black uppercase tracking-widest text-sm hover:bg-accent-dark transition-colors">
                JOIN OUR TEAM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
