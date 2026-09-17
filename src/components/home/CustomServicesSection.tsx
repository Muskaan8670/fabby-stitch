import Link from "next/link";
import { CUSTOM_SERVICES } from "@/data/customServices";

export default function CustomServicesSection() {
  return (
    <section id="custom-apparel" className="w-full bg-[#FAF9F6] text-[#121212] py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Top Intro Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4E4E7] pb-10">
          <div className="space-y-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Custom Apparel
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212] leading-[1.08]">
              Made For Your <br />
              <span className="font-semibold">Brand.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
            From custom garments to branded apparel programs, we bring your specifications to life with precision, consistency, and attention to detail.
          </p>
        </div>

        {/* 2x2 Editorial Catalogue Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CUSTOM_SERVICES.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] p-8 sm:p-10 transition-all duration-300 hover:border-zinc-400 hover:shadow-xl"
            >
              {/* Top Panel Section: Number & Arrow */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-[#C5A059]">
                  {service.number}
                </span>

                <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-[#121212] group-hover:bg-[#C5A059] group-hover:border-[#C5A059] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5"
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
                </div>
              </div>

              {/* Service Info */}
              <div className="space-y-3 flex-1 flex flex-col justify-start">
                <h3 className="text-lg font-semibold uppercase tracking-wider text-[#121212] group-hover:text-[#C5A059] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="pt-6 mt-6 border-t border-[#E4E4E7]/60 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                  Fabby Stitch Custom Program
                </span>
                <span className="w-6 h-[1px] bg-[#E4E4E7] group-hover:w-12 group-hover:bg-[#C5A059] transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Secondary CTA */}
        <div className="flex justify-end pt-2">
          <Link
            href="/custom-quote"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#121212] hover:text-[#C5A059] transition-colors py-2 border-b border-[#121212] hover:border-[#C5A059]"
          >
            <span>Discuss Your Requirements</span>
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
