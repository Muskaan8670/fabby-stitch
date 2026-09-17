import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/collections/ProductCard";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

export default function CategoriesPage() {
  // Curated 4 products for bottom preview section
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* 1. Compact Editorial Hero */}
        <section className="w-full bg-white border-b border-[#E4E4E7] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span>Fabby Stitch</span>
              <span>/</span>
              <span>Categories</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#121212]">
              Explore The <span className="font-semibold">Collection.</span>
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Discover the core apparel silhouettes offered through Fabby Stitch—from heavyweight cotton blanks and fleece hoodies to embroidered polos and custom twill headwear.
            </p>
          </div>
        </section>

        {/* 2. Main Visual Category Grid */}
        <section className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-4">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
              Apparel Taxonomy (01 – 06)
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
              6 Primary Categories
            </span>
          </div>

          {/* Row 1: Two Large 50/50 Cards (T-Shirt & Hoodie) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATEGORIES.slice(0, 2).map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-2xl min-h-[440px] sm:min-h-[500px]"
              >
                <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/40 to-transparent" />
                </div>

                <div className="relative z-10 p-6 sm:p-8 flex justify-between items-start">
                  <span className="px-3 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-xs font-mono font-bold border border-white/10">
                    {cat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold bg-white/90 backdrop-blur-md px-3 py-1 border border-white/40">
                    Explore Category
                  </span>
                </div>

                <div className="relative z-10 p-6 sm:p-8 space-y-3 max-w-lg">
                  <span className="text-xs uppercase tracking-widest text-zinc-300 font-medium block">
                    {cat.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-white leading-none">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-200 font-normal leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white group-hover:text-[#C5A059] transition-colors">
                    <span>View Category</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 2: Three Medium Cards (Polo, Sweat Shirt, Long Sleeve) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.slice(2, 5).map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative flex flex-col justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-xl"
              >
                <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[10px] uppercase font-mono font-semibold border border-white/10">
                      {cat.number}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-xl font-semibold uppercase tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-zinc-600 font-normal leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4E4E7]/60 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#121212] group-hover:text-[#C5A059] transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 3: Full-Width Spotlight Panel (Cap) */}
          {CATEGORIES.slice(5, 6).map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative flex flex-col lg:flex-row justify-between bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-2xl"
            >
              <div className="relative w-full lg:w-3/5 min-h-[300px] lg:min-h-[360px] bg-zinc-900 overflow-hidden">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#121212]/30 to-[#121212]/90 hidden lg:block" />
              </div>

              <div className="w-full lg:w-2/5 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 bg-[#121212] text-[#FAF9F6] text-xs font-mono font-bold">
                      {cat.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                      Headwear Collection
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                    Structured <span className="font-semibold">Caps</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E4E7]/60 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#121212] group-hover:text-[#C5A059] transition-colors">
                    Explore Headwear →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* 3. Category Information / Dual Pathway Section */}
        <section className="w-full bg-white border-y border-[#E4E4E7] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Dual Pathway Options
              </span>
              <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                From Ready-To-Wear <span className="font-semibold">To Custom.</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                Shop existing Fabby Stitch styles ready for immediate shipping or use these core apparel categories as the starting point for a custom corporate, team, or private-label production run.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
              >
                Shop Collection →
              </Link>
              <Link
                href="/custom-quote"
                className="px-8 py-3.5 bg-white border border-[#121212] text-[#121212] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#121212] hover:text-[#FAF9F6] transition-all duration-300"
              >
                Get Custom Quote →
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Curated Small Featured Products Row */}
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E4E4E7] pb-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Fabby Stitch Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#121212]">
                Featured From <span className="font-semibold">The Collection</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-xs uppercase tracking-widest font-semibold text-[#121212] hover:text-[#C5A059] transition-colors"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
