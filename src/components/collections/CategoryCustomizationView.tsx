"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PRODUCTS, Product } from "@/data/products";
import ShopProductCard from "@/components/shop/ShopProductCard";
import QuickAddModal from "@/components/shop/QuickAddModal";
import FilterDrawer, { FilterState } from "@/components/shop/FilterDrawer";

export interface CategorySpec {
  label: string;
  value: string;
}

export interface CategoryCustomizationViewProps {
  categorySlug: string;
  categoryTitle: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  specs: CategorySpec[];
}

const CATEGORY_NAV_ITEMS = [
  { label: "ALL", href: "/shop", active: false },
  { label: "T-SHIRTS", href: "/collections/t-shirts", active: false },
  { label: "HOODIES", href: "/collections/hoodies", active: false },
  { label: "POLO SHIRTS", href: "/collections/polos", active: false },
  { label: "SWEATSHIRTS", href: "/collections/sweatshirts", active: false },
  { label: "LONG SLEEVE T-SHIRTS", href: "/collections/long-sleeves", active: false },
  { label: "CAPS", href: "/collections/caps", active: false },
];

export default function CategoryCustomizationView({
  categorySlug,
  categoryTitle,
  eyebrow,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  specs,
}: CategoryCustomizationViewProps) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    quantity: "50-100",
    technique: "Embroidery",
    details: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Filter State for Product Grid
  const [filters, setFilters] = useState<FilterState>({
    category: categorySlug,
    availability: "all",
    minPrice: 0,
    maxPrice: 100,
    selectedColors: [],
    selectedSizes: [],
    sortBy: "default",
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedQuickAddProduct, setSelectedQuickAddProduct] = useState<Product | null>(null);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Change Handler
  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      category: categorySlug,
      availability: "all",
      minPrice: 0,
      maxPrice: 100,
      selectedColors: [],
      selectedSizes: [],
      sortBy: "default",
    });
    setCurrentPage(1);
  };

  // Products Pool for this Category
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    return categoryProducts
      .filter((p) => {
        if (filters.availability === "in-stock" && (!p.inStock || p.soldOut)) return false;
        if (filters.availability === "out-of-stock" && !p.soldOut) return false;
        if (filters.availability === "on-sale" && !p.onSale) return false;
        if (p.priceNum < filters.minPrice || p.priceNum > filters.maxPrice) return false;
        if (filters.selectedColors.length > 0) {
          const match = p.colorNames.some((name) => filters.selectedColors.includes(name));
          if (!match) return false;
        }
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
        return 0;
      });
  }, [categoryProducts, filters]);

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        quantity: "50-100",
        technique: "Embroidery",
        details: "",
      });
      setSelectedFile(null);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
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
            <Link href="/collections" className="hover:text-zinc-900 transition-colors">
              Collections
            </Link>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">{categoryTitle}</span>
          </div>
        </nav>

        {/* 2. Compact Editorial Hero */}
        <section className="w-full bg-white border-b border-[#E4E4E7] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              <span>Fabby Stitch</span>
              <span>/</span>
              <span>{eyebrow}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212]">
              {categoryTitle}<span className="font-semibold">.</span>
            </h1>
            <p className="max-w-3xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
              {description}
            </p>
          </div>
        </section>

        {/* 3. Category Navigation Bar */}
        <section className="w-full border-b border-[#E4E4E7] bg-white sticky top-0 z-20 shadow-sm overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-4 py-3 min-w-max">
            {CATEGORY_NAV_ITEMS.map((item, idx) => {
              const isActive = item.href.includes(categorySlug);
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all border ${
                    isActive
                      ? "bg-[#121212] text-[#FAF9F6] border-[#121212] shadow-sm"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-[#121212]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </section>

        {/* 4. PREMIUM CUSTOMIZATION & INQUIRY SECTION (Two-Column Layout) */}
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7] bg-white">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E4E4E7] pb-6">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold block">
                  Direct Workshop Customization
                </span>
                <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
                  Share Your <span className="font-semibold">Design Requirement</span>
                </h2>
              </div>
              <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
                Provide your artwork, quantities, and specifications below for an instant workshop estimate and digital proofing.
              </p>
            </div>

            {/* Success Toast */}
            {submitSuccess && (
              <div className="p-4 bg-emerald-950 text-emerald-100 border border-emerald-600 text-xs uppercase tracking-widest font-semibold flex items-center justify-between animate-in fade-in duration-300">
                <span>✓ Design requirement submitted! Our NYC tailoring team will contact you within 24 hours.</span>
                <button onClick={() => setSubmitSuccess(false)} className="text-emerald-400 hover:text-white font-bold">✕</button>
              </div>
            )}

            {/* TWO COLUMN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* LEFT COLUMN: Category Customization Graphic & Specifications Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-white border border-[#E4E4E7] overflow-hidden shadow-md">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-contain p-1"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                {/* Garment Specifications Card */}
                <div className="bg-[#FAF9F6] border border-[#E4E4E7] p-6 space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#121212] border-b border-zinc-200 pb-2">
                    Technical Garment Specifications
                  </h4>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-xs">
                    {specs.map((spec, i) => (
                      <div key={i}>
                        <dt className="text-zinc-400 text-[10px] uppercase">{spec.label}</dt>
                        <dd className="font-semibold text-zinc-900">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="pt-2 border-t border-zinc-200 text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                    • Direct NYC Workshop Pricing • Low Minimum Quantities • Fast 5-Day Delivery
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Customization / Requirement Inquiry Form */}
              <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#E4E4E7] p-6 sm:p-10 shadow-sm space-y-6">
                <div className="space-y-1 border-b border-zinc-200 pb-4">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#121212]">
                    Custom {categoryTitle} Requirement Form
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Fill in your project details below to receive a personalized quote and proof.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#121212] block">
                        Full Name <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alexander Wright"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-xs font-medium text-zinc-900 focus:border-[#121212] outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#121212] block">
                        Email Address <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-xs font-medium text-zinc-900 focus:border-[#121212] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#121212] block">
                        Phone Number <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(212) 555-0198"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-xs font-medium text-zinc-900 focus:border-[#121212] outline-none transition-colors"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#121212] block">
                        Estimated Quantity <span className="text-amber-700">*</span>
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-xs font-semibold uppercase tracking-wider text-zinc-900 focus:border-[#121212] outline-none transition-colors"
                      >
                        <option value="12-24">12 – 24 Units</option>
                        <option value="25-50">25 – 50 Units</option>
                        <option value="50-100">50 – 100 Units</option>
                        <option value="100-250">100 – 250 Units</option>
                        <option value="250-500">250 – 500 Units</option>
                        <option value="500+">500+ Units (Bulk Pricing)</option>
                      </select>
                    </div>
                  </div>

                  {/* Customization Technique */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#121212] block">
                      Preferred Technique
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Embroidery", "Screen Print", "3D Puff Print", "Woven Patch"].map((tech) => {
                        const isSelected = formData.technique === tech;
                        return (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => setFormData({ ...formData, technique: tech })}
                            className={`py-2 px-3 text-[11px] font-semibold uppercase tracking-wider border transition-all ${
                              isSelected
                                ? "bg-[#121212] text-white border-[#121212]"
                                : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-500"
                            }`}
                          >
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Requirement Details Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#121212] block">
                      Requirement Details & Artwork Instructions <span className="text-amber-700">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe your logo placement (e.g. Left chest 3.5 inches, back neck print), garment colors, sizes needed, and any deadline..."
                      className="w-full px-4 py-3 bg-white border border-zinc-300 text-xs font-medium text-zinc-900 focus:border-[#121212] outline-none transition-colors leading-relaxed"
                    />
                  </div>

                  {/* File Upload / Artwork Zone */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#121212] block">
                      Upload Logo / Artwork (Optional)
                    </label>
                    <div className="border-2 border-dashed border-zinc-300 bg-white p-6 text-center transition-colors hover:border-zinc-900">
                      <input
                        type="file"
                        id="fileUpload"
                        accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.svg"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setSelectedFile(e.target.files[0]);
                          }
                        }}
                        className="hidden"
                      />
                      <label htmlFor="fileUpload" className="cursor-pointer space-y-2 block">
                        <svg className="w-8 h-8 mx-auto text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        {selectedFile ? (
                          <div className="text-xs font-bold text-emerald-800 font-mono">
                            ✓ File attached: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)
                          </div>
                        ) : (
                          <>
                            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
                              Click or Drag Vector / Logo File Here
                            </div>
                            <div className="text-[10px] font-mono text-zinc-400">
                              Supports PNG, JPG, PDF, AI, EPS, SVG (Max 25MB)
                            </div>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Requirement..." : `Submit ${categoryTitle} Requirement →`}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* 5. AVAILABLE PRODUCTS CATALOG & GRID (If items exist for this category) */}
        {categoryProducts.length > 0 && (
          <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E4E4E7] pb-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                  Available Catalog Items
                </span>
                <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#121212]">
                  Shop {categoryTitle} <span className="font-semibold">Collection</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
                  {filteredProducts.length} Products
                </span>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <FilterDrawer
                filters={filters}
                onChangeFilter={handleFilterChange}
                onResetFilters={handleResetFilters}
                isOpenMobile={isMobileFilterOpen}
                onCloseMobile={() => setIsMobileFilterOpen(false)}
                totalResults={filteredProducts.length}
              />

              <div className="flex-1 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {paginatedProducts.map((product) => (
                    <ShopProductCard
                      key={product.id}
                      product={product}
                      onQuickAdd={(p) => {
                        setSelectedQuickAddProduct(p);
                        setIsQuickAddOpen(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <QuickAddModal
        product={selectedQuickAddProduct}
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
      />

      <Footer />
    </div>
  );
}
