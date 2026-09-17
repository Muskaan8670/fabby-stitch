"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PRODUCTS, Product } from "@/data/products";
import ShopProductCard from "@/components/shop/ShopProductCard";
import QuickAddModal from "@/components/shop/QuickAddModal";
import FilterDrawer, { FilterState } from "@/components/shop/FilterDrawer";

const CATEGORY_NAV_ITEMS = [
  { label: "ALL", href: "/shop", active: false },
  { label: "T-SHIRTS", href: "/collections/t-shirts", active: true },
  { label: "HOODIES", href: "/collections/hoodies", active: false },
  { label: "POLO SHIRTS", href: "/collections/polos", active: false },
  { label: "SWEATSHIRTS", href: "/collections/sweatshirts", active: false },
  { label: "LONG SLEEVE T-SHIRTS", href: "/collections/t-shirts", active: false },
  { label: "CAPS", href: "/collections/caps", active: false },
];

const ITEMS_PER_PAGE = 8;

export default function TShirtsCollectionPage() {
  // Filter State tailored specifically to T-Shirts
  const [filters, setFilters] = useState<FilterState>({
    category: "t-shirts",
    availability: "all",
    minPrice: 0,
    maxPrice: 100,
    selectedColors: [],
    selectedSizes: [],
    sortBy: "default",
  });

  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Quick Add Modal State
  const [selectedQuickAddProduct, setSelectedQuickAddProduct] = useState<Product | null>(null);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState<boolean>(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter Change Handler
  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
    setCurrentPage(1);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setFilters({
      category: "t-shirts",
      availability: "all",
      minPrice: 0,
      maxPrice: 100,
      selectedColors: [],
      selectedSizes: [],
      sortBy: "default",
    });
    setCurrentPage(1);
  };

  // Base T-Shirt products pool
  const tshirtProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.categorySlug === "t-shirts");
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return tshirtProducts
      .filter((p) => {
        // Availability
        if (filters.availability === "in-stock" && (!p.inStock || p.soldOut)) return false;
        if (filters.availability === "out-of-stock" && !p.soldOut) return false;
        if (filters.availability === "on-sale" && !p.onSale) return false;

        // Price Range
        if (p.priceNum < filters.minPrice || p.priceNum > filters.maxPrice) return false;

        // Colors
        if (filters.selectedColors.length > 0) {
          const match = p.colorNames.some((name) => filters.selectedColors.includes(name));
          if (!match) return false;
        }

        // Sizes
        if (filters.selectedSizes.length > 0) {
          const match = p.sizes.some((sz) => filters.selectedSizes.includes(sz));
          if (!match) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === "price-low") return a.priceNum - b.priceNum;
        if (filters.sortBy === "price-high") return b.priceNum - a.priceNum;
        if (filters.sortBy === "popularity") return b.popularity - a.popularity;
        if (filters.sortBy === "rating") return b.rating - a.rating;
        if (filters.sortBy === "latest")
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return 0;
      });
  }, [tshirtProducts, filters]);

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
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-zinc-200/80 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-zinc-900 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">T-Shirts</span>
          </div>
        </nav>

        {/* 2. Compact Collection Hero */}
        <section className="w-full bg-white border-b border-[#E4E4E7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span>Fabby Stitch</span>
              <span>/</span>
              <span>Collection</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#121212]">
              T-Shirts<span className="font-semibold">.</span>
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              Explore the Fabby Stitch T-shirt collection, from everyday combed cotton essentials to signature New York-inspired graphic tees ($23.95).
            </p>
          </div>
        </section>

        {/* 3. Category Navigation Bar */}
        <section className="w-full border-b border-[#E4E4E7] bg-white sticky top-0 z-20 shadow-sm overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-4 py-3 min-w-max">
            {CATEGORY_NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all border ${
                  item.active
                    ? "bg-[#121212] text-[#FAF9F6] border-[#121212] shadow-sm"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-[#121212]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Controls Bar & Product Grid */}
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E4E7] pb-4">
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 px-4 py-2 border border-[#121212] bg-[#121212] text-white text-xs uppercase tracking-wider font-semibold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>Filter ({filteredProducts.length})</span>
              </button>

              <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium font-mono">
                {filteredProducts.length} PRODUCTS
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

          {/* Main Layout: Filter Drawer + Product Grid */}
          <div className="flex gap-8 items-start">
            <FilterDrawer
              filters={filters}
              onChangeFilter={handleFilterChange}
              onResetFilters={handleResetFilters}
              isOpenMobile={isMobileFilterOpen}
              onCloseMobile={() => setIsMobileFilterOpen(false)}
              totalResults={filteredProducts.length}
            />

            <div className="flex-1 space-y-10">
              {filteredProducts.length === 0 ? (
                <div className="bg-white border border-zinc-200 p-12 text-center space-y-4 max-w-md mx-auto my-12">
                  <h3 className="text-lg font-semibold uppercase tracking-wider">NO T-SHIRTS FOUND</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Try adjusting your filters to find available T-shirts.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="inline-block px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all"
                  >
                    CLEAR FILTERS
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

        {/* 5. Custom T-Shirt CTA Banner */}
        <section className="w-full bg-[#121212] text-[#FAF9F6] py-14 px-4 sm:px-6 lg:px-8 mt-16 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Custom Branding & Printing
              </span>
              <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-white">
                Want Your Own <span className="font-semibold text-white">Version?</span>
              </h3>
              <p className="text-xs text-zinc-400">
                Create custom screen printed or embroidered T-shirts for your brand, team or corporate project.
              </p>
            </div>
            <Link
              href="/custom-quote"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl flex-shrink-0"
            >
              Get Custom Quote →
            </Link>
          </div>
        </section>
      </main>

      {/* Quick Add Modal */}
      <QuickAddModal
        product={selectedQuickAddProduct}
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
      />

      <Footer />
    </div>
  );
}
