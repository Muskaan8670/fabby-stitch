"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PRODUCTS, Product } from "@/data/products";
import ShopProductCard from "@/components/shop/ShopProductCard";
import QuickAddModal from "@/components/shop/QuickAddModal";
import FilterDrawer, { FilterState } from "@/components/shop/FilterDrawer";

const CATEGORY_TABS = [
  { id: "all", label: "ALL" },
  { id: "t-shirts", label: "T-SHIRTS" },
  { id: "hoodies", label: "HOODIES" },
  { id: "polos", label: "POLO SHIRTS" },
  { id: "sweatshirts", label: "SWEATSHIRTS" },
  { id: "long-sleeves", label: "LONG SLEEVE T-SHIRTS" },
  { id: "caps", label: "CAPS" },
];

const ITEMS_PER_PAGE = 8;

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlCategory = searchParams.get("category") || "all";
  const urlProduct = searchParams.get("product");

  // Redirect if ?product= query parameter is passed
  useEffect(() => {
    if (urlProduct) {
      router.replace(`/products/${urlProduct}`);
    }
  }, [urlProduct, router]);

  // Filter State
  const [filters, setFilters] = useState<FilterState>({
    category: urlCategory,
    availability: "all",
    minPrice: 0,
    maxPrice: 100,
    selectedColors: [],
    selectedSizes: [],
    sortBy: "default",
  });

  // Sync category state if URL parameter changes
  useEffect(() => {
    if (urlCategory) {
      setFilters((prev) => ({ ...prev, category: urlCategory }));
    }
  }, [urlCategory]);

  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Quick Add Modal State
  const [selectedQuickAddProduct, setSelectedQuickAddProduct] = useState<Product | null>(null);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState<boolean>(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Handle Filter Change
  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
    setCurrentPage(1);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setFilters({
      category: "all",
      availability: "all",
      minPrice: 0,
      maxPrice: 100,
      selectedColors: [],
      selectedSizes: [],
      sortBy: "default",
    });
    setCurrentPage(1);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category Filter
      if (filters.category !== "all" && p.categorySlug !== filters.category) {
        return false;
      }

      // Availability Filter
      if (filters.availability === "in-stock" && (!p.inStock || p.soldOut)) return false;
      if (filters.availability === "out-of-stock" && !p.soldOut) return false;
      if (filters.availability === "on-sale" && !p.onSale) return false;

      // Price Filter
      if (p.priceNum < filters.minPrice || p.priceNum > filters.maxPrice) {
        return false;
      }

      // Color Filter
      if (filters.selectedColors.length > 0) {
        const hasMatchingColor = p.colorNames.some((name) =>
          filters.selectedColors.includes(name)
        );
        if (!hasMatchingColor) return false;
      }

      // Size Filter
      if (filters.selectedSizes.length > 0) {
        const hasMatchingSize = p.sizes.some((size) =>
          filters.selectedSizes.includes(size)
        );
        if (!hasMatchingSize) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-low") return a.priceNum - b.priceNum;
      if (filters.sortBy === "price-high") return b.priceNum - a.priceNum;
      if (filters.sortBy === "popularity") return b.popularity - a.popularity;
      if (filters.sortBy === "rating") return b.rating - a.rating;
      if (filters.sortBy === "latest")
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return 0; // default
    });
  }, [filters]);

  // Paginated Slice
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleOpenQuickAdd = (product: Product) => {
    setSelectedQuickAddProduct(product);
    setIsQuickAddOpen(true);
  };

  return (
    <main className="flex-1 bg-[#FAF9F6] text-[#121212]">
      {/* 1. Restrained Editorial Header / Intro */}
      <section className="w-full border-b border-[#E4E4E7] bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            <span>Fabby Stitch</span>
            <span>/</span>
            <span>Online Retail</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#121212]">
            Shop <span className="font-semibold">All.</span>
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            Original Fabby Stitch graphic apparel, heavyweight cotton blanks, fleece hoodies, and embroidered headwear designed with New York street heritage and direct workshop quality.
          </p>
        </div>
      </section>

      {/* 2. Horizontal Category Filter Navigation */}
      <section className="w-full border-b border-[#E4E4E7] bg-white sticky top-0 z-20 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-4 py-3 min-w-max">
          {CATEGORY_TABS.map((tab) => {
            const isActive = filters.category === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleFilterChange({ category: tab.id })}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all border ${
                  isActive
                    ? "bg-[#121212] text-[#FAF9F6] border-[#121212] shadow-sm"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-[#121212]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Catalog Controls Bar & Main Grid Layout */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Control Bar: Total Count, Filter Button (Mobile), Sort Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E4E7] pb-4">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Drawer Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 px-4 py-2 border border-[#121212] bg-[#121212] text-white text-xs uppercase tracking-wider font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filter ({filteredProducts.length})</span>
            </button>

            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
              Showing <span className="text-[#121212] font-semibold">{filteredProducts.length}</span> Products
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 text-xs">
            <label className="uppercase tracking-widest text-zinc-400 font-medium">Sort By:</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
              className="px-3 py-1.5 bg-white border border-zinc-300 text-xs font-semibold uppercase tracking-wider text-[#121212] focus:border-zinc-900 outline-none"
            >
              <option value="default">Default</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Average Rating</option>
              <option value="latest">Latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Main Content Area: Sidebar + Product Grid */}
        <div className="flex gap-8 items-start">
          {/* Filter Sidebar & Drawer */}
          <FilterDrawer
            filters={filters}
            onChangeFilter={handleFilterChange}
            onResetFilters={handleResetFilters}
            isOpenMobile={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
            totalResults={filteredProducts.length}
          />

          {/* Product Grid Area */}
          <div className="flex-1 space-y-10">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-zinc-200 p-12 text-center space-y-4 max-w-md mx-auto my-12">
                <h3 className="text-lg font-semibold uppercase tracking-wider">No Products Found</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  No products matched your selected criteria. Try adjusting your filters or clearing options.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="inline-block px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    onQuickAdd={handleOpenQuickAdd}
                  />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-8 border-t border-[#E4E4E7] flex items-center justify-center gap-2 text-xs font-semibold">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-2 border border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900 disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 border text-xs uppercase font-mono font-semibold transition-all ${
                        isActive
                          ? "bg-[#121212] text-white border-[#121212] shadow-sm"
                          : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900"
                      }`}
                    >
                      {String(pageNum).padStart(2, "0")}
                    </button>
                  );
                })}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-2 border border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900 disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-wider"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. Retail CTA Banner before Footer */}
      <section className="w-full bg-[#121212] text-[#FAF9F6] py-14 px-4 sm:px-6 lg:px-8 mt-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
              B2B & Custom Branding
            </span>
            <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-white">
              Need Something Made For <span className="font-semibold text-white">Your Brand?</span>
            </h3>
            <p className="text-xs text-zinc-400">
              High-density screen printing, 3D puff embroidery, and custom garment manufacturing with no minimums.
            </p>
          </div>
          <Link
            href="/custom-apparel"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl flex-shrink-0"
          >
            Explore Corporate & Custom →
          </Link>
        </div>
      </section>

      {/* Quick Add Modal */}
      <QuickAddModal
        product={selectedQuickAddProduct}
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
      />
    </main>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans">
      <AnnouncementBar />
      <Header />
      <Suspense fallback={<div className="p-12 text-center text-xs uppercase">Loading Shop...</div>}>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  );
}
