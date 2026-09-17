"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/collections/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "t-shirts" | "hoodies">("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTab === "all") return true;
    return product.categorySlug === activeTab;
  });

  return (
    <section className="w-full bg-[#FAF9F6] text-[#121212] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4E4E7] pb-8">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              Fabby Stitch Original Collections
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212]">
              Original <span className="font-semibold">Bestsellers.</span>
            </h2>
          </div>

          {/* Interactive Category Filter Tabs (H&M / Pull&Bear Style) */}
          <div className="flex flex-wrap items-center gap-3 border border-zinc-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-[#121212] text-[#FAF9F6]"
                  : "text-zinc-600 hover:text-[#121212]"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveTab("t-shirts")}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all ${
                activeTab === "t-shirts"
                  ? "bg-[#121212] text-[#FAF9F6]"
                  : "text-zinc-600 hover:text-[#121212]"
              }`}
            >
              Fabby Stitch T-Shirts ($23.95)
            </button>
            <button
              onClick={() => setActiveTab("hoodies")}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all ${
                activeTab === "hoodies"
                  ? "bg-[#121212] text-[#FAF9F6]"
                  : "text-zinc-600 hover:text-[#121212]"
              }`}
            >
              Fabby Stitch Hoodies ($34.95)
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Editorial Callout Bar */}
        <div className="pt-4 flex justify-between items-center border-t border-[#E4E4E7] pt-8">
          <p className="text-xs text-zinc-500 uppercase tracking-widest">
            High-Density Graphic Printing & Direct Workshop Pricing
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md"
          >
            Shop Full Catalog →
          </Link>
        </div>

      </div>
    </section>
  );
}
