import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] text-[#121212]">
      {/* Background Editorial Visual Container */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/images/hero-new.webp"
          alt="Fabby Stitch New York Apparel Workshop & Campaign Showcase"
          fill
          priority
          quality={100}
          unoptimized
          className="object-cover object-[85%_center] sm:object-[85%_center] lg:object-[88%_center]"
          sizes="100vw"
        />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-36 flex flex-col justify-end min-h-[66vh] sm:min-h-[70vh] lg:min-h-[74vh]">
        <div className="max-w-xl space-y-6">
          
          {/* Subtitle / Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-zinc-200 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>Refined Style • Priority on Quality</span>
          </div>

          {/* Editorial Display Heading - Authentic Fabby Stitch Hero Copy */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#121212] uppercase leading-[1.05]">
            For Modern <br />
            <span className="font-semibold text-[#121212]">Youth.</span>
          </h1>

          {/* Refined Copy Aligned with Authentic Business Model */}
          <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed max-w-xl drop-shadow-sm">
            Graphic streetwear t-shirts, heavyweight fleece hoodies, custom embroidery, and precision screen printing. Engineered in New York with direct workshop pricing and no minimum order limits.
          </p>

          {/* Dual CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary CTA: Shop Collection */}
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#121212] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-xl"
            >
              Shop Collection
            </Link>

            {/* Secondary CTA: Corporate & Custom */}
            <Link
              href="/custom-order"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/90 text-[#121212] border border-zinc-300 text-xs uppercase tracking-widest font-semibold hover:bg-[#121212] hover:text-white transition-all duration-300 backdrop-blur-md shadow-sm"
            >
              Corporate & Custom
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Feature Status Bar */}
      <div className="relative z-10 w-full border-t border-zinc-200/80 bg-white/90 backdrop-blur-md py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[11px] uppercase tracking-widest text-zinc-700 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-semibold">01</span>
            <span className="font-medium">T-Shirts $23.95 • Hoodies $34.95</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[#C5A059] font-semibold">02</span>
            <span className="font-medium">Auto 10% Off On First Order</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[#C5A059] font-semibold">03</span>
            <span className="font-medium">No Minimum Order Quantities</span>
          </div>
        </div>
      </div>

    </section>
  );
}
