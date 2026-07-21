import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-background flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="font-montserrat font-black text-accent text-7xl md:text-9xl uppercase tracking-tighter mb-6">
        404
      </p>
      <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground uppercase tracking-tight mb-4">
        This one got away.
      </h1>
      <p className="font-inter font-light text-foreground/70 text-lg max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist — but the ceviche definitely does.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-montserrat font-black uppercase tracking-widest text-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          Back Home
        </Link>
        <Link href="/menu" className="inline-block bg-accent text-accent-foreground px-8 py-3 font-montserrat font-black uppercase tracking-widest text-sm hover:bg-accent-dark transition-colors">
          See the Menu
        </Link>
      </div>
    </div>
  );
}
