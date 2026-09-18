import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function CategoryShowcase() {
  // Only display the 4 core categories for the Home page showcase
  const displayCategories = CATEGORIES.filter(
    (c) => c.id !== "longsleeves" && c.id !== "caps"
  );

  return (
    <section className="w-full bg-[#FAF9F6] text-[#121212] py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4E4E7] pb-8">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Curated Selection
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212]">
              Shop By <span className="font-semibold">Category.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-md font-normal leading-relaxed">
            Explore our core signature silhouettes — built with heavyweight fabrics, precision stitching, and premium finishing.
          </p>
        </div>

        {/* Editorial 2x2 Grid (4 Core Categories: T-Shirt, Hoodie, Polo, Sweatshirt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block w-full aspect-[4/5] md:aspect-[3/4] bg-zinc-900 overflow-hidden border border-[#E4E4E7]"
            >
              {/* Background Category Image */}
              <Image
                src={category.imageSrc}
                alt={category.imageAlt}
                fill
                className="object-cover object-[center_10%] transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Editorial Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent transition-opacity duration-300" />

              {/* Category Metadata Card Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                {/* Top Category Index Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-mono font-semibold">
                    {category.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-300 bg-black/40 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    Signature Series
                  </span>
                </div>

                {/* Bottom Category Info & Link */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-300">
                    {category.subtitle}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-white group-hover:text-[#C5A059] transition-colors">
                      {category.name}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#C5A059] group-hover:border-[#C5A059]">
                      <svg
                        className="w-4 h-4"
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
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
