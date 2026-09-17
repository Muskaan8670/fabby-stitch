import Image from "next/image";
import Link from "next/link";
import { DUAL_PATHWAYS } from "@/data/dualPathway";

export default function DualPathwaySection() {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#121212] py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            Choose Your Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
            Two Pathways. <span className="font-semibold">Uncompromising Quality.</span>
          </h2>
        </div>

        {/* Two-Column Split Pathway Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {DUAL_PATHWAYS.map((pathway) => (
            <article
              key={pathway.id}
              className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-zinc-400"
            >
              {/* Image Container with Hover Micro-Interaction */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-zinc-100 overflow-hidden">
                <Image
                  src={pathway.imageSrc}
                  alt={pathway.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[10px] uppercase tracking-widest font-medium border border-white/10">
                    {pathway.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors">
                    {pathway.title}
                  </h3>
                  <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                    {pathway.description}
                  </p>
                </div>

                {/* Minimal CTA Link with CSS Hover Arrow Movement */}
                <div className="pt-2">
                  <Link
                    href={pathway.ctaHref}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#121212] group-hover:text-[#C5A059] transition-colors"
                  >
                    <span>{pathway.ctaText}</span>
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
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
