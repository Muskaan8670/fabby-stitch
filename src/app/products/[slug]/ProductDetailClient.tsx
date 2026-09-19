"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductCard from "@/components/collections/ProductCard";
import QuickAddModal from "@/components/shop/QuickAddModal";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { addToCart } = useCart();

  // Gallery Image State
  const images = product.images && product.images.length > 0 ? product.images : [product.imageSrc];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Variant & Quantity Selection State
  const [selectedColor, setSelectedColor] = useState(product.colorNames[0] || "Default");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M");
  const [quantity, setQuantity] = useState(1);

  // Accordion Expand States
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");

  // Quick Add Modal & Toast State
  const [isQuickAddModalOpen, setIsQuickAddModalOpen] = useState(false);
  const [addedToCartToast, setAddedToCartToast] = useState(false);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleAddToCart = () => {
    addToCart({
      product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    setAddedToCartToast(true);
    setTimeout(() => {
      setAddedToCartToast(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      <AnnouncementBar />
      <Header />

      <div className="flex-1 pt-6 pb-24">
        {/* Toast Notification */}
        {addedToCartToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white px-6 py-4 rounded-none shadow-2xl border border-[#C5A059] flex items-center gap-4 animate-in slide-in-from-bottom-5 duration-300">
            <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">Added to Bag</p>
              <p className="text-sm font-semibold">{product.name} ({selectedColor}, {selectedSize})</p>
            </div>
          </div>
        )}

        {/* Breadcrumbs Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-4 text-xs font-mono tracking-widest uppercase text-zinc-500">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#121212] transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/collections" className="hover:text-[#121212] transition-colors">Collections</Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/collections/${product.categorySlug}`} className="hover:text-[#121212] transition-colors">
                {product.categorySlug.replace("-", " ")}
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#121212] font-bold truncate max-w-[200px]">{product.name}</li>
          </ol>
        </nav>

        {/* Main Product Display Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT: PRODUCT IMAGE GALLERY (7 Cols on LG) */}
            <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
              
              {/* Thumbnail Switcher (Vertical on desktop, horizontal on mobile) */}
              {images.length > 1 && (
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[600px] scrollbar-none">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-24 flex-shrink-0 border transition-all duration-200 overflow-hidden ${
                        selectedImage === img
                          ? "border-[#121212] ring-2 ring-[#C5A059]/50 opacity-100"
                          : "border-zinc-300 opacity-70 hover:opacity-100 hover:border-zinc-500"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-cover object-[center_12%]"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Stage Image */}
              <div className="relative flex-1 aspect-[4/5] bg-zinc-900 overflow-hidden border border-[#E4E4E7] group">
                <Image
                  src={selectedImage}
                  alt={product.imageAlt}
                  fill
                  priority
                  className="object-cover object-[center_12%] cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
                  onClick={() => setIsLightboxOpen(true)}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 items-start">
                  {product.tag && (
                    <span className="px-3 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[10px] uppercase tracking-widest font-semibold border border-white/10">
                      {product.tag}
                    </span>
                  )}
                  {product.onSale && (
                    <span className="px-3 py-1 bg-red-800 text-white text-[10px] uppercase tracking-widest font-bold border border-white/20">
                      ON SALE
                    </span>
                  )}
                  {product.soldOut && (
                    <span className="px-3 py-1 bg-zinc-900 text-white text-[10px] uppercase tracking-widest font-bold border border-white/20">
                      SOLD OUT
                    </span>
                  )}
                </div>

                {/* GSM Badge */}
                {product.gsm && (
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[#C5A059] text-[10px] font-mono font-semibold uppercase tracking-widest border border-white/15">
                      {product.gsm}
                    </span>
                  </div>
                )}

                {/* Zoom Trigger Button */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Enlarge image"
                  className="absolute bottom-4 right-4 p-2.5 bg-black/70 text-white backdrop-blur-md hover:bg-[#C5A059] hover:text-[#121212] transition-colors border border-white/15"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT: PRODUCT INFO & PURCHASE CONTROLS (5 Cols on LG) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Category Subtitle & Rating */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-mono font-bold">
                    {product.subtitle}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-mono font-semibold text-zinc-600">
                      {product.rating} (128 reviews)
                    </span>
                  </div>
                </div>

                {/* Product Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#121212] leading-tight">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 pt-1">
                  <span className="text-2xl sm:text-3xl font-bold text-[#121212]">
                    {product.price}
                  </span>
                  {product.onSale && (
                    <span className="text-lg font-mono text-zinc-400 line-through">
                      ${(product.priceNum * 1.25).toFixed(2)}
                    </span>
                  )}
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    In Stock & Ready to Ship
                  </span>
                </div>
              </div>

              <hr className="border-[#E4E4E7]" />

              {/* Description Excerpt */}
              {product.description && (
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* COLOR SELECTION */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold">
                  <span className="text-zinc-500">Color: <strong className="text-[#121212]">{selectedColor}</strong></span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colorNames.map((colorName, idx) => {
                    const hex = product.colors[idx] || "#121212";
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(colorName)}
                        className={`flex items-center gap-2 px-3.5 py-2 border text-xs font-semibold uppercase tracking-wider transition-all ${
                          selectedColor === colorName
                            ? "border-[#121212] bg-[#121212] text-[#FAF9F6] shadow-sm"
                            : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-500"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-zinc-400"
                          style={{ backgroundColor: hex }}
                        />
                        {colorName}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SIZE SELECTION */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold">
                  <span className="text-zinc-500">Size: <strong className="text-[#121212]">{selectedSize}</strong></span>
                  <button
                    type="button"
                    onClick={() => alert("Standard US Unisex Fit. XS (34-36\"), S (36-38\"), M (38-40\"), L (42-44\"), XL (46-48\"), 2XL (50-52\").")}
                    className="text-[#C5A059] underline hover:text-[#121212] transition-colors lowercase"
                  >
                    size guide
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2.5 text-center text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                        selectedSize === size
                          ? "border-[#121212] bg-[#121212] text-[#FAF9F6]"
                          : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY & PRIMARY ACTION BUTTONS */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  {/* Quantity Control */}
                  <div className="flex items-center border border-[#121212] bg-white h-12">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease quantity"
                      className="w-10 h-full flex items-center justify-center text-lg font-semibold text-zinc-600 hover:text-[#121212] hover:bg-zinc-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-sm font-mono font-bold text-[#121212]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                      className="w-10 h-full flex items-center justify-center text-lg font-semibold text-zinc-600 hover:text-[#121212] hover:bg-zinc-100 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={handleAddToCart}
                    disabled={product.soldOut}
                    className={`flex-1 h-12 px-6 uppercase tracking-widest text-xs font-bold transition-all duration-200 shadow-md ${
                      product.soldOut
                        ? "bg-zinc-300 text-zinc-500 cursor-not-allowed"
                        : "bg-[#121212] text-[#FAF9F6] hover:bg-[#C5A059] hover:text-[#121212]"
                    }`}
                  >
                    {product.soldOut ? "Sold Out" : `Add to Bag • ${(product.priceNum * quantity).toFixed(2)}`}
                  </button>
                </div>

                {/* Secondary CTA: Custom Order / Bulk Quote */}
                <Link
                  href={`/custom-quote?product=${encodeURIComponent(product.name)}`}
                  className="w-full h-12 flex items-center justify-center gap-2 border border-[#121212] bg-white text-[#121212] hover:bg-[#121212] hover:text-[#FAF9F6] text-xs uppercase tracking-widest font-bold transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  Request Custom Embroidery / Screen Print Quote
                </Link>
              </div>

              {/* TRUST & VALUE PROPS BAR */}
              <div className="grid grid-cols-3 gap-2 py-4 px-3 bg-zinc-100 border border-[#E4E4E7] text-center text-[10px] font-mono tracking-wider uppercase text-zinc-700">
                <div className="space-y-1">
                  <span className="block font-bold text-[#121212]">Fast NYC Shipping</span>
                  <span className="text-zinc-500">Dispatched in 24h</span>
                </div>
                <div className="space-y-1 border-x border-zinc-300 px-2">
                  <span className="block font-bold text-[#121212]">Premium Quality</span>
                  <span className="text-zinc-500">Pre-shrunk Cotton</span>
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-[#121212]">Bulk Savings</span>
                  <span className="text-zinc-500">Quotes available</span>
                </div>
              </div>

              {/* ACCORDION SECTIONS */}
              <div className="border-t border-[#E4E4E7] divide-y divide-[#E4E4E7]">
                
                {/* Product Details & Features */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("description")}
                    className="w-full flex justify-between items-center text-left text-sm uppercase tracking-widest font-bold text-[#121212]"
                  >
                    <span>Product Features & Craftsmanship</span>
                    <span className="text-lg font-mono">{openAccordion === "description" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "description" && (
                    <div className="pt-3 pb-1 text-xs text-zinc-600 space-y-2 leading-relaxed animate-in fade-in duration-200">
                      {product.features && product.features.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1">
                          {product.features.map((feat, idx) => (
                            <li key={idx}>{feat}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>
                          Engineered according to Fabby Stitch NYC garment specifications. Reinforced stitching, pre-shrunk premium yarn, and optimal density for maximum longevity.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Specifications */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("specs")}
                    className="w-full flex justify-between items-center text-left text-sm uppercase tracking-widest font-bold text-[#121212]"
                  >
                    <span>Fabric & Fit Specifications</span>
                    <span className="text-lg font-mono">{openAccordion === "specs" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "specs" && (
                    <div className="pt-3 pb-1 text-xs text-zinc-600 animate-in fade-in duration-200">
                      {product.specifications ? (
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono">
                          {Object.entries(product.specifications).map(([key, val]) => (
                            <div key={key}>
                              <dt className="text-zinc-400 uppercase text-[10px]">{key}</dt>
                              <dd className="text-zinc-900 font-semibold">{val}</dd>
                            </div>
                          ))}
                        </dl>
                      ) : (
                        <div className="grid grid-cols-2 gap-2 font-mono">
                          <div>
                            <span className="text-zinc-400 block text-[10px]">WEIGHT / GSM</span>
                            <span className="font-semibold text-zinc-900">{product.gsm || "Heavyweight Premium"}</span>
                          </div>
                          <div>
                            <span className="text-zinc-400 block text-[10px]">CARE INSTRUCTIONS</span>
                            <span className="font-semibold text-zinc-900">Machine Wash Cold</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Shipping & Returns */}
                <div className="py-4">
                  <button
                    onClick={() => toggleAccordion("shipping")}
                    className="w-full flex justify-between items-center text-left text-sm uppercase tracking-widest font-bold text-[#121212]"
                  >
                    <span>Delivery & Guarantee</span>
                    <span className="text-lg font-mono">{openAccordion === "shipping" ? "−" : "+"}</span>
                  </button>
                  {openAccordion === "shipping" && (
                    <div className="pt-3 pb-1 text-xs text-zinc-600 space-y-2 leading-relaxed animate-in fade-in duration-200">
                      <p>
                        All orders are processed and inspected at our New York facility. Standard delivery within 3-5 business days. Free standard shipping on orders over $100.
                      </p>
                      <p>
                        30-day hassle-free return and exchange policy for unworn items with original tags intact.
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>
        </main>

        {/* LIGHTBOX MODAL */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl font-mono hover:text-[#C5A059] transition-colors"
            >
              ✕
            </button>
            <div className="relative w-full max-w-4xl aspect-[4/5] max-h-[90vh]">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[#E4E4E7]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
                  Complete The Look
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#121212]">
                  You May Also Like
                </h2>
              </div>
              <Link
                href={`/collections/${product.categorySlug}`}
                className="text-xs uppercase tracking-widest font-bold text-[#121212] hover:text-[#C5A059] transition-colors flex items-center gap-1"
              >
                View All {product.categorySlug.replace("-", " ")} →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProd) => (
                <ProductCard key={relProd.id} product={relProd} />
              ))}
            </div>
          </section>
        )}

        {/* CUSTOM ORDER CALL-TO-ACTION BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-[#121212] text-[#FAF9F6] p-8 sm:p-12 border border-[#C5A059]/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 z-10 max-w-xl text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold">
                Custom Merchandise & Corporate Apparel
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                Need {product.name} with custom artwork?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                We specialize in custom screen printing, 3D puff embroidery, and high-density printing for brands, teams, and events.
              </p>
            </div>
            <div className="z-10 flex-shrink-0">
              <Link
                href={`/custom-quote?product=${encodeURIComponent(product.name)}`}
                className="inline-block px-8 py-4 bg-[#C5A059] text-[#121212] text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-lg"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>

        {/* QUICK ADD MODAL */}
        {isQuickAddModalOpen && (
          <QuickAddModal
            isOpen={isQuickAddModalOpen}
            product={product}
            onClose={() => setIsQuickAddModalOpen(false)}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
