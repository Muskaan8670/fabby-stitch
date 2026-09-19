"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { CATEGORIES, CategoryItem } from "@/data/categories";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { products: [], categories: [] };

    const matchingProducts = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
    ).slice(0, 6);

    const matchingCategories = CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );

    return {
      products: matchingProducts,
      categories: matchingCategories,
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#121212]/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="w-full max-w-2xl bg-white border border-[#E4E4E7] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E4E4E7] flex items-center gap-3 bg-[#FAF9F6]">
          <svg className="w-5 h-5 text-zinc-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products (e.g. Hoodie, Polo, Cap, T-Shirt)..."
            className="w-full bg-transparent text-sm sm:text-base text-zinc-900 placeholder-zinc-400 outline-none font-medium"
          />

          {query && (
            <button onClick={() => setQuery("")} className="text-xs text-zinc-400 hover:text-zinc-700 font-mono px-1">
              Clear
            </button>
          )}

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-500 hover:text-zinc-900 transition-colors rounded-md font-mono text-xs uppercase"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {!query.trim() ? (
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold block">
                Popular Categories
              </span>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    onClick={onClose}
                    className="px-3 py-1.5 bg-zinc-100 hover:bg-[#121212] hover:text-white border border-zinc-200 text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Category Matches */}
              {searchResults.categories.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold block">
                    Matching Categories ({searchResults.categories.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {searchResults.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={cat.href}
                        onClick={onClose}
                        className="p-3 border border-zinc-200 bg-[#FAF9F6] hover:border-zinc-900 flex items-center gap-3 transition-all"
                      >
                        <div className="relative w-10 h-10 bg-zinc-200 flex-shrink-0 overflow-hidden">
                          <Image src={cat.imageSrc} alt={cat.name} fill className="object-cover" sizes="40px" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase text-zinc-900">{cat.name}</div>
                          <div className="text-[10px] text-zinc-500 line-clamp-1">{cat.subtitle}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Matches */}
              {searchResults.products.length > 0 && (
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold block">
                    Matching Products ({searchResults.products.length})
                  </span>
                  <div className="space-y-2">
                    {searchResults.products.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.slug}`}
                        onClick={onClose}
                        className="p-3 border border-zinc-200 hover:border-zinc-900 flex items-center justify-between gap-4 transition-all bg-white"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-14 bg-zinc-100 flex-shrink-0 overflow-hidden border border-zinc-200">
                            <Image src={p.imageSrc} alt={p.name} fill className="object-cover" sizes="48px" />
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase text-zinc-900">{p.name}</div>
                            <div className="text-[10px] text-zinc-500">{p.subtitle}</div>
                          </div>
                        </div>
                        <div className="text-xs font-mono font-bold text-zinc-900">{p.price}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {searchResults.products.length === 0 && searchResults.categories.length === 0 && (
                <div className="py-12 text-center space-y-2">
                  <div className="text-xs font-bold uppercase text-zinc-800">No Products Found for &quot;{query}&quot;</div>
                  <p className="text-xs text-zinc-500">Try searching for &quot;Hoodie&quot;, &quot;Polo&quot;, &quot;T-Shirt&quot;, or &quot;Cap&quot;.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
