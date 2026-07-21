"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDE_COUNT = 3;
const ROTATE_MS = 10000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Restarts on every index change so a manual dot click gets a full interval
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDE_COUNT), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, index]);

  const slideClass = (i: number) =>
    `absolute inset-0 transition-opacity duration-700 ${
      index === i ? "opacity-100" : "opacity-0 pointer-events-none"
    }`;

  return (
    <div
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured promotions"
    >
      {/* Slide 1 — A Taste of Baja (coastal brand slide) */}
      <div className={slideClass(0)} aria-hidden={index !== 0}>
        <Image
          src="/images/hero.jpg"
          alt="Baja California coastline at sunset"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-primary/30 to-transparent" />
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="font-montserrat font-black text-6xl md:text-8xl lg:text-[110px] text-secondary leading-[0.85] uppercase tracking-tighter drop-shadow-lg">
              A TASTE<br /><span className="text-accent">OF BAJA</span>
            </h1>
            <div className="mt-8">
              <Link href="/order" className="inline-block bg-accent text-accent-foreground px-10 py-4 font-montserrat font-black uppercase tracking-wider text-sm lg:text-base shadow-xl hover:bg-accent-dark transition-colors">
                ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 — Feed Your Crew (catering, navy field) */}
      <div className={`${slideClass(1)} bg-primary`} aria-hidden={index !== 1}>
        {/* subtle wave texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 700" preserveAspectRatio="none" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5, 6].map((row) => (
            <path
              key={row}
              d={`M0,${80 + row * 100} C120,${110 + row * 100} 240,${50 + row * 100} 360,${80 + row * 100} C480,${110 + row * 100} 600,${50 + row * 100} 720,${80 + row * 100} C840,${110 + row * 100} 960,${50 + row * 100} 1080,${80 + row * 100} C1200,${110 + row * 100} 1320,${50 + row * 100} 1440,${80 + row * 100}`}
              stroke="#FFFFFF" strokeWidth="3" fill="none"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <div className="flex-1 max-w-xl">
            <h2 className="font-montserrat font-black text-5xl md:text-7xl text-accent leading-[0.9] uppercase tracking-tighter mb-8">
              FEED YOUR CREW
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {["GAME DAYS", "OFFICE LUNCHES", "FAMILY GATHERINGS"].map((label, i) => (
                <span key={label} className={`bg-white text-primary font-montserrat font-black uppercase text-sm px-4 py-2 shadow-md ${i % 2 === 0 ? "-rotate-2" : "rotate-1"}`}>
                  {label}
                </span>
              ))}
            </div>
            <p className="font-inter text-white/90 text-lg mb-8 leading-relaxed">
              Ceviche trays, taco bars, and more — pickup or delivery.
            </p>
            <Link href="/catering" className="inline-block bg-accent text-accent-foreground px-10 py-4 font-montserrat font-black uppercase tracking-wider text-sm lg:text-base shadow-xl hover:bg-accent-dark transition-colors">
              ORDER CATERING
            </Link>
          </div>
          <div className="hidden lg:block relative flex-1 h-full">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[420px] h-[420px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl rotate-3 border-8 border-white/10">
              <Image src="/images/seafoodfest.png" alt="Seafoodfest ceviche tray" fill sizes="500px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3 — $7+ Lunch Menu (light promo slide) */}
      <div className={`${slideClass(2)} bg-[#F4F6F8]`} aria-hidden={index !== 2}>
        {/* flanking dish circles, bleeding off-canvas like cutouts */}
        <div className="absolute -left-24 -top-24 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl -rotate-6">
          <Image src="/images/tacos.jpg" alt="Baja fish tacos" fill sizes="384px" className="object-cover" />
        </div>
        <div className="absolute -right-20 bottom-[-60px] w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-xl rotate-6">
          <Image src="/images/ceviche.jpg" alt="Baja ceviche" fill sizes="420px" className="object-cover" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <span className="bg-sand text-primary font-montserrat font-black uppercase text-sm px-4 py-1.5 -rotate-3 shadow-md mb-5">
            New
          </span>
          <div className="bg-accent text-white font-montserrat font-black uppercase text-5xl md:text-7xl tracking-tighter px-6 py-3 -rotate-1 shadow-lg leading-none">
            $7+ Lunch Menu
          </div>
          <p className="font-montserrat font-black text-primary uppercase text-xl md:text-3xl tracking-tight mt-8 mb-8">
            10 meals starting at just $7!
          </p>
          <Link href="/order" className="inline-block bg-primary text-primary-foreground px-10 py-4 font-montserrat font-black uppercase tracking-wider text-sm lg:text-base shadow-xl hover:bg-accent hover:text-accent-foreground transition-colors">
            ORDER NOW
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={index === i}
            className={`w-3 h-3 rounded-full border-2 transition-colors ${
              index === i
                ? "bg-accent border-accent"
                : `bg-transparent ${index === 2 ? "border-primary/50 hover:border-primary" : "border-white/60 hover:border-white"}`
            }`}
          />
        ))}
      </div>
    </div>
  );
}
