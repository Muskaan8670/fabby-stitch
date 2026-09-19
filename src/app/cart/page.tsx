"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalCount,
    isInitialized,
  } = useCart();

  const [checkoutNotification, setCheckoutNotification] = useState(false);

  // Dynamic Shipping calculation ($0 for orders over $100, else $8.50)
  const shippingFee = subtotal >= 100 || subtotal === 0 ? 0 : 8.5;
  const grandTotal = subtotal + shippingFee;

  const handleCheckout = () => {
    setCheckoutNotification(true);
    setTimeout(() => {
      setCheckoutNotification(false);
    }, 4500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      <AnnouncementBar />
      <Header />

      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Checkout Demo Toast Notification */}
        {checkoutNotification && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white px-6 py-4 border border-[#C5A059] shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-5 duration-300">
            <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#C5A059]">Demo Checkout Ready</p>
              <p className="text-xs text-zinc-300">
                Cart state is stored in localStorage. Integration ready for backend API & Stripe payment gateway.
              </p>
            </div>
          </div>
        )}

        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-xs font-mono tracking-widest uppercase text-zinc-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/home" className="hover:text-[#121212] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#121212] font-bold">Shopping Bag</li>
          </ol>
        </nav>

        {/* Page Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E4E4E7] pb-6 mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
              Your Selection
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#121212]">
              Shopping Bag {isInitialized && totalCount > 0 && `(${totalCount})`}
            </h1>
          </div>

          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs uppercase tracking-widest text-zinc-500 hover:text-red-700 transition-colors font-semibold self-start sm:self-auto"
            >
              Clear Bag
            </button>
          )}
        </div>

        {/* Hydration / Loading Skeleton */}
        {!isInitialized ? (
          <div className="py-20 text-center text-zinc-400 font-mono text-xs uppercase tracking-widest">
            Loading your bag...
          </div>
        ) : items.length === 0 ? (
          /* EMPTY CART STATE */
          <div className="py-20 px-6 bg-white border border-[#E4E4E7] text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-zinc-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.25}
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#121212]">
                Your Shopping Bag is Empty
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                Explore graphic streetwear t-shirts, heavyweight fleece hoodies, custom embroidery, and precision screen printing.
              </p>
            </div>
            <div>
              <Link
                href="/collections"
                className="inline-block px-8 py-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 shadow-md"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          /* CART CONTENT: ITEMS + SUMMARY SIDEBAR */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: ITEMS LIST (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => {
                const itemTotal = item.priceNum * item.quantity;
                return (
                  <div
                    key={item.variantId}
                    className="bg-white border border-[#E4E4E7] p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-zinc-400"
                  >
                    {/* Thumbnail & Product Details */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative w-20 h-24 sm:w-24 sm:h-28 bg-zinc-900 flex-shrink-0 border border-zinc-200">
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt || item.name}
                          fill
                          className="object-cover object-[center_12%]"
                        />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#121212] hover:text-[#C5A059] transition-colors">
                          <Link href={`/products/${item.slug}`}>{item.name}</Link>
                        </h3>
                        
                        {/* Variant Badges */}
                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-600 uppercase">
                          {item.color && (
                            <span className="bg-zinc-100 px-2 py-0.5 border border-zinc-200 font-semibold">
                              Color: {item.color}
                            </span>
                          )}
                          {item.size && (
                            <span className="bg-zinc-100 px-2 py-0.5 border border-zinc-200 font-semibold">
                              Size: {item.size}
                            </span>
                          )}
                        </div>

                        {/* Unit Price */}
                        <p className="text-xs font-mono font-bold text-[#121212] pt-0.5">
                          {item.price} each
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls & Line Total */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-zinc-200 pt-3 sm:pt-0">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-zinc-300 bg-white">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 font-bold disabled:opacity-30 disabled:cursor-not-allowed"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-9 text-center text-xs font-mono font-bold text-[#121212]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 font-bold"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right">
                        <span className="text-sm font-bold text-[#121212] block">
                          ${itemTotal.toFixed(2)}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.variantId)}
                        className="p-1.5 text-zinc-400 hover:text-red-700 transition-colors"
                        aria-label="Remove item"
                        title="Remove item"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2 flex justify-between items-center text-xs font-mono tracking-wider">
                <Link
                  href="/collections"
                  className="text-[#121212] font-bold hover:text-[#C5A059] transition-colors flex items-center gap-1 uppercase"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: ORDER SUMMARY (4 cols) */}
            <div className="lg:col-span-4 bg-white border border-[#E4E4E7] p-6 space-y-6 sticky top-28">
              <h2 className="text-lg font-bold uppercase tracking-tight text-[#121212] border-b border-[#E4E4E7] pb-3">
                Order Summary
              </h2>

              <dl className="space-y-3 text-xs font-mono">
                <div className="flex justify-between text-zinc-600">
                  <dt>Subtotal ({totalCount} items)</dt>
                  <dd className="font-semibold text-[#121212]">${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <dt>Estimated Shipping</dt>
                  <dd className="font-semibold text-[#121212]">
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700">FREE (NYC Promo)</span>
                    ) : (
                      `$${shippingFee.toFixed(2)}`
                    )}
                  </dd>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <dt>Estimated Tax</dt>
                  <dd className="font-semibold text-zinc-500">Calculated at checkout</dd>
                </div>

                <div className="border-t border-[#E4E4E7] pt-3 flex justify-between text-sm font-bold text-[#121212]">
                  <dt>Estimated Total</dt>
                  <dd className="text-base text-[#121212]">${grandTotal.toFixed(2)}</dd>
                </div>
              </dl>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 shadow-lg"
              >
                Proceed to Checkout • ${grandTotal.toFixed(2)}
              </button>

              {/* Temporary Implementation Note */}
              <div className="p-3 bg-zinc-50 border border-zinc-200 text-[10px] font-mono text-zinc-500 leading-relaxed">
                <span className="font-bold text-zinc-700 uppercase block mb-0.5">Frontend Demo Cart</span>
                Items persist in browser localStorage. Ready for backend API integration.
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
