import Image from "next/image";
import Link from "next/link";
import { CRAFTSMANSHIP_PRINCIPLES } from "@/data/craftsmanship";

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="w-full bg-[#141416] text-[#FAF9F6] py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28">
        
        {/* Top Main Split Section: Text (~45%) / Visual (~55%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Area (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Small Gold Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/5 border border-white/10 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>Built With Intention</span>
            </div>

            {/* Large Editorial Heading */}
            <h2 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-white leading-[1.05]">
              Craftsmanship <br />
              <span className="font-semibold text-white">That Shows.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-lg">
              From heavyweight fabrics to precision stitching, every Fabby Stitch garment is built with attention to the details that define exceptional apparel.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FAF9F6] hover:text-[#C5A059] transition-colors py-2 border-b border-white/20 hover:border-[#C5A059]"
              >
                <span>Explore Our Craftsmanship</span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>

          </div>

          {/* Right Visual Feature Area (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-zinc-900 border border-white/10 overflow-hidden group">
              <Image
                src="/images/craftsmanship-detail-editorial.jpg"
                alt="Fabby Stitch Precision Craftsmanship & Stitching Detail"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 z-10">
                <span className="px-3.5 py-1.5 bg-[#141416]/90 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#C5A059] font-medium border border-white/10">
                  NYC Workshop • Tailored Specs
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Three Craftsmanship Principles (Bottom Horizontal Row) */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {CRAFTSMANSHIP_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="group space-y-4 p-6 bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-300"
              >
                <span className="text-xl sm:text-2xl font-mono font-bold text-[#C5A059] tracking-tight block">
                  {principle.number}
                </span>
                <h3 className="text-base sm:text-lg font-semibold uppercase tracking-wider text-white group-hover:text-[#C5A059] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
