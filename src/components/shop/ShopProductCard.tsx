"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ShopProductCardProps {
  product: Product;
  onQuickAdd: (product: Product) => void;
}

export default function ShopProductCard({ product, onQuickAdd }: ShopProductCardProps) {
  return (
    <article className="group relative flex flex-col bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-xl">
      {/* Product Image Container */}
      <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden">
        <Link href={`/shop?product=${product.slug}`} className="block w-full h-full">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
              product.soldOut ? "opacity-75 grayscale-[30%]" : ""
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>

        {/* Status Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.soldOut ? (
            <span className="px-2.5 py-1 bg-zinc-900 text-white text-[9px] uppercase tracking-widest font-bold border border-white/20">
              SOLD OUT
            </span>
          ) : product.onSale ? (
            <span className="px-2.5 py-1 bg-red-800 text-white text-[9px] uppercase tracking-widest font-bold border border-white/20">
              ON SALE
            </span>
          ) : product.tag ? (
            <span className="px-2.5 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[9px] uppercase tracking-widest font-semibold border border-white/10">
              {product.tag}
            </span>
          ) : null}
        </div>

        {/* GSM Spec Badge if available */}
        {product.gsm && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[#C5A059] text-[9px] font-mono font-semibold uppercase tracking-widest border border-white/10">
              {product.gsm}
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-medium">
            {product.subtitle}
          </span>
          <h3 className="text-sm sm:text-base font-semibold uppercase tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors leading-snug">
            <Link href={`/shop?product=${product.slug}`}>{product.name}</Link>
          </h3>
        </div>

        {/* Color Swatches & Price */}
        <div className="pt-3 border-t border-[#E4E4E7]/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {product.colors.map((colorHex, idx) => (
              <span
                key={idx}
                className="w-3.5 h-3.5 rounded-full border border-zinc-300"
                style={{ backgroundColor: colorHex }}
                title={product.colorNames[idx] || "Color option"}
              />
            ))}
          </div>

          <span className="text-sm sm:text-base font-semibold text-[#121212]">
            {product.price}
          </span>
        </div>

        {/* Action Buttons: Quick Add & Custom Request */}
        <div className="pt-2 flex items-center gap-2">
          {product.soldOut ? (
            <button
              disabled
              className="flex-1 py-2.5 px-3 bg-zinc-200 text-zinc-400 text-[10px] uppercase tracking-widest font-semibold cursor-not-allowed text-center"
            >
              Sold Out
            </button>
          ) : (
            <button
              onClick={() => onQuickAdd(product)}
              className="flex-1 py-2.5 px-3 bg-[#121212] text-[#FAF9F6] text-[10px] uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all duration-200 text-center shadow-sm"
            >
              Quick Add
            </button>
          )}

          <Link
            href="/custom-quote"
            aria-label="Custom Order Quote"
            title="Request Custom Apparel Quote"
            className="p-2.5 bg-[#FAF9F6] border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-[#FAF9F6] transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
