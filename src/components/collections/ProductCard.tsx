import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productUrl = `/products/${product.slug}`;

  return (
    <article className="group relative flex flex-col bg-white border border-[#E4E4E7] overflow-hidden transition-all duration-300 hover:border-zinc-400 hover:shadow-xl">
      {/* Product Image Container */}
      <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden">
        <Link href={productUrl} className="block w-full h-full">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
              product.soldOut ? "opacity-75 grayscale-[30%]" : ""
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>

        {/* Tag / Badge */}
        {product.tag && (
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
            <span className="px-2.5 py-1 bg-[#121212]/90 backdrop-blur-md text-[#FAF9F6] text-[9px] uppercase tracking-widest font-semibold border border-white/10">
              {product.tag}
            </span>
          </div>
        )}

        {/* GSM Spec Overlay Badge if available */}
        {product.gsm && (
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
            <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-[#C5A059] text-[9px] font-mono font-semibold uppercase tracking-widest border border-white/10">
              {product.gsm}
            </span>
          </div>
        )}
      </div>

      {/* Product Info Content */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-medium">
            {product.subtitle}
          </span>
          <h3 className="text-base font-semibold uppercase tracking-tight text-[#121212] group-hover:text-[#C5A059] transition-colors leading-snug">
            <Link href={productUrl}>{product.name}</Link>
          </h3>
        </div>

        {/* Bottom Color Swatches & Price */}
        <div className="pt-3 border-t border-[#E4E4E7]/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                className="w-3.5 h-3.5 rounded-full border border-zinc-300"
                style={{ backgroundColor: color }}
                title={product.colorNames[idx] || "Color option"}
              />
            ))}
          </div>

          <span className="text-base font-semibold text-[#121212]">
            {product.price}
          </span>
        </div>

        {/* Action Button: View Details & Custom Quote */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={productUrl}
            className="flex-1 text-center py-2.5 px-3 bg-[#121212] text-[#FAF9F6] text-[10px] uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-200"
          >
            View Details
          </Link>
          <Link
            href={`/custom-quote?product=${encodeURIComponent(product.name)}`}
            aria-label="Custom Order Quote"
            title="Request Custom Apparel Quote"
            className="p-2.5 bg-[#FAF9F6] border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-[#FAF9F6] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </Link>
        </div>

      </div>
    </article>
  );
}
