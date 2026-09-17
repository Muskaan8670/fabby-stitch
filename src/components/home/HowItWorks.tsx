import Link from "next/link";
import { PROCESS_STEPS } from "@/data/process";

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#121212] py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4E4E7] pb-10">
          <div className="space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              The Fabby Stitch Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212] leading-[1.1]">
              From Idea To <br />
              <span className="font-semibold">Perfect Fit.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
            Select a signature silhouette, customize your specifications, and have our New York workshop construct your garment with uncompromised precision stitching.
          </p>
        </div>

        {/* 4-Step Horizontal Process Grid */}
        <div className="relative">
          
          {/* Subtle Horizontal Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#E4E4E7] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <article
                key={step.number}
                className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] p-6 sm:p-8 transition-all duration-300 hover:border-zinc-400 hover:shadow-lg"
              >
                {/* Step Top Header: Number & Connector Node */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors">
                    {step.number}
                  </span>
                  
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FAF9F6] stroke-[#E4E4E7] border-2 border-[#C5A059] group-hover:bg-[#C5A059] transition-all duration-300" />
                </div>

                {/* Step Content */}
                <div className="space-y-3 flex-1 flex flex-col justify-start">
                  <h3 className="text-lg font-semibold uppercase tracking-wider text-[#121212] group-hover:text-[#C5A059] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Bottom Accent Line */}
                <div className="pt-6 mt-6 border-t border-[#E4E4E7]/60 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">
                    Step 0{index + 1} of 04
                  </span>
                  <span className="w-4 h-[1px] bg-[#E4E4E7] group-hover:w-8 group-hover:bg-[#C5A059] transition-all duration-300" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Secondary CTA */}
        <div className="flex justify-end pt-4">
          <Link
            href="/custom-quote"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#121212] hover:text-[#C5A059] transition-colors py-2 border-b border-[#121212] hover:border-[#C5A059]"
          >
            <span>Start Your Custom Order</span>
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
    </section>
  );
}
