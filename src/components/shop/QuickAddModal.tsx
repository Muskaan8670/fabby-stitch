"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

interface QuickAddModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (item: { product: Product; color: string; size: string; quantity: number }) => void;
}

export default function QuickAddModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}: QuickAddModalProps) {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  if (!isOpen || !product) return null;

  const activeColor = selectedColor || product.colorNames[0] || "Default";
  const activeSize = selectedSize || product.sizes[0] || "M";

  const handleAddToCart = () => {
    if (product.soldOut) return;
    if (onAddToCart) {
      onAddToCart({
        product,
        color: activeColor,
        size: activeSize,
        quantity,
      });
    }
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FAF9F6] text-[#121212] border border-zinc-300 shadow-2xl p-6 sm:p-8 z-10 space-y-6 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header Product Preview */}
        <div className="flex gap-4 items-center border-b border-zinc-200 pb-5">
          <div className="relative w-20 h-24 bg-zinc-900 flex-shrink-0 overflow-hidden border border-zinc-200">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block">
              Quick Add • {product.categorySlug}
            </span>
            <h3 className="text-lg font-semibold uppercase tracking-tight text-[#121212]">
              {product.name}
            </h3>
            <p className="text-sm font-bold text-[#121212]">{product.price}</p>
          </div>
        </div>

        {/* Color Selection */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold">
            <span>Color:</span>
            <span className="text-zinc-500 font-normal">{activeColor}</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {product.colors.map((colorHex, idx) => {
              const name = product.colorNames[idx] || `Color ${idx + 1}`;
              const isSelected = activeColor === name;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedColor(name)}
                  className={`flex items-center gap-2 px-3 py-1.5 border text-xs uppercase tracking-wider transition-all ${
                    isSelected
                      ? "border-[#121212] bg-white font-semibold text-[#121212] shadow-sm"
                      : "border-zinc-300 bg-white/50 text-zinc-600 hover:border-zinc-400"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-zinc-300"
                    style={{ backgroundColor: colorHex }}
                  />
                  <span>{name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold">
            <span>Size:</span>
            <span className="text-zinc-500 font-normal">{activeSize}</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {product.sizes.map((size) => {
              const isSelected = activeSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[42px] px-3 py-2 border text-xs uppercase tracking-wider font-semibold transition-all ${
                    isSelected
                      ? "border-[#121212] bg-[#121212] text-white shadow-sm"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider font-semibold block">Quantity</label>
          <div className="flex items-center w-32 border border-zinc-300 bg-white">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 font-semibold"
            >
              -
            </button>
            <span className="flex-1 text-center text-xs font-bold text-[#121212]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 font-semibold"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Button / Success Banner */}
        <div className="pt-2">
          {addedSuccess ? (
            <div className="w-full py-3.5 bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold text-center rounded-sm">
              ✓ Added To Cart ({quantity} × {activeSize} / {activeColor})
            </div>
          ) : product.soldOut ? (
            <button
              disabled
              className="w-full py-3.5 bg-zinc-300 text-zinc-500 text-xs uppercase tracking-widest font-semibold cursor-not-allowed rounded-sm"
            >
              SOLD OUT — Item Unavailable
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-3.5 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C5A059] transition-all duration-300 shadow-md rounded-sm"
            >
              ADD TO CART • {product.price}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
