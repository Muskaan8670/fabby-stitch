import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#141416] text-[#FAF9F6]">
      {/* Background Editorial Visual Container */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Image
          src="/images/hero-editorial.png"
          alt="Fabby Stitch New York Apparel Workshop & Campaign Showcase"
          fill
          priority
          className="object-cover object-[75%_35%] sm:object-[72%_35%] md:object-[75%_35%] lg:object-[80%_35%]"
          sizes="100vw"
        />
        {/* Subtle Gradient Overlay for Text Readability without obscuring models */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/90 via-transparent to-transparent sm:via-[#141416]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141416]/95 via-[#141416]/60 to-transparent max-w-3xl" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36 lg:py-44 flex flex-col justify-end min-h-[82vh]">
        <div className="max-w-2xl space-y-6">
          
          {/* Subtitle / Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#141416]/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>Refined Style • Priority on Quality</span>
          </div>

          {/* Editorial Display Heading - Authentic Fabby Stitch Hero Copy */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase leading-[1.05]">
            For Modern <br />
            <span className="font-semibold text-white">Youth.</span>
          </h1>

          {/* Refined Copy Aligned with Authentic Business Model */}
          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl">
            Graphic streetwear t-shirts, heavyweight fleece hoodies, custom embroidery, and precision screen printing. Engineered in New York with direct workshop pricing and no minimum order limits.
          </p>

          {/* Dual CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary CTA: Shop Collection */}
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl"
            >
              Shop Collection
            </Link>

            {/* Secondary CTA: Corporate & Custom */}
            <Link
              href="/custom-order"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#141416]/70 text-[#FAF9F6] border border-white/40 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#121212] transition-all duration-300 backdrop-blur-md"
            >
              Corporate & Custom
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Feature Status Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#141416]/90 backdrop-blur-md py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[11px] uppercase tracking-widest text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-medium">01</span>
            <span>T-Shirts $23.95 • Hoodies $34.95</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[#C5A059] font-medium">02</span>
            <span>Auto 10% Off On First Order</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[#C5A059] font-medium">03</span>
            <span>No Minimum Order Quantities</span>
          </div>
        </div>
      </div>

    </section>
  );
}
