import { VALUE_PILLARS, ValuePillar } from "@/data/valueProps";

export default function ValuePropositionSection() {
  return (
    <section className="w-full bg-[#141416] text-[#FAF9F6] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Editorial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 sm:pb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#C5A059]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>Why Fabby Stitch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white leading-[1.1]">
              Uncompromising Standards. <br className="hidden sm:block" />
              <span className="font-semibold text-[#FAF9F6]">Direct Workshop Advantage.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Built for brands, creators, and corporate teams demanding heavyweight textiles, precise custom embellishments, and zero minimum order limits.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="group relative flex flex-col justify-between bg-zinc-900/50 border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:border-[#C5A059]/50 hover:bg-zinc-900/80"
            >
              {/* Pillar Top Bar: Number & Icon */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-2xl font-mono font-bold tracking-wider text-[#C5A059] group-hover:text-white transition-colors">
                    {pillar.number}
                  </span>

                  {/* Refined Minimalist Icon per Pillar */}
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059]/40 transition-colors">
                    {getPillarIcon(pillar.id)}
                  </div>
                </div>

                {/* Subtitle / Badge */}
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold uppercase tracking-tight text-white group-hover:text-[#C5A059] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Accent Line */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-medium">
                  {pillar.subtitle}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#C5A059] transition-colors" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

/**
 * Render clean, minimal SVG icons matching each pillar concept without cartoonish elements
 */
function getPillarIcon(id: string) {
  switch (id) {
    case "ny-workshop":
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* NYC Workshop / Compass & Needle motif */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case "gsm-quality":
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Heavyweight Fabric / Layers motif */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      );
    case "fast-turnaround":
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fast Production / Lightning & Clock motif */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "zero-moq":
      return (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 0 MOQ / Bespoke Single Unit to Scale motif */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      );
    default:
      return null;
  }
}
