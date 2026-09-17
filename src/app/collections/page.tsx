import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CollectionHeader from "@/components/collections/CollectionHeader";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212]">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* Collections Page Header */}
        <CollectionHeader
          eyebrow="Fabby Stitch Catalog"
          title="Apparel Collections & Categories"
          description="Browse our complete directory of heavy-weight blank essentials, tailored corporate apparel, and custom-ready silhouettes."
        />

        {/* Collections Overview Category Grid */}
        <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-xl"
              >
                <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <Image
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[10px] uppercase tracking-widest font-mono font-semibold border border-white/10">
                      {category.number}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block">
                      {category.subtitle}
                    </span>
                    <h2 className="text-xl font-semibold uppercase tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-xs text-zinc-600 font-normal leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4E4E7]/60 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#121212] group-hover:text-[#C5A059] transition-colors">
                      Explore Category
                    </span>
                    <svg
                      className="w-4 h-4 text-[#121212] transform transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#C5A059]"
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
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
