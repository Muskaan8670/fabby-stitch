import Link from "next/link";

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  itemPurchased: string;
  itemHref: string;
  rating: number;
  quote: string;
  verified: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    author: "Marcus T.",
    location: "New York, NY",
    itemPurchased: "NYC Shadows T-shirt",
    itemHref: "/collections/t-shirts",
    rating: 5,
    quote:
      "The fabric weight and graphic printing quality are unmatched. You can immediately feel the craftsmanship difference compared to standard retail tees. Outstanding direct-from-workshop quality.",
    verified: true,
  },
  {
    id: "review-2",
    author: "Sarah L.",
    location: "Brooklyn, NY",
    itemPurchased: "BRKLYN Roots Hoodie",
    itemHref: "/collections/hoodies",
    rating: 5,
    quote:
      "Super heavy fleece with a perfectly structured double-walled hood. It keeps its fit and softness after multiple washes. Fabby Stitch has become my go-to brand for NYC apparel.",
    verified: true,
  },
  {
    id: "review-3",
    author: "David K.",
    location: "Queens, NY",
    itemPurchased: "Custom Corporate Embroidery Order",
    itemHref: "/custom-quote",
    rating: 5,
    quote:
      "Ordered custom embroidered polos for our corporate team. Fast turnaround, no minimum order hassle, and high-density stitching precision.",
    verified: true,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#121212] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            Customer Feedback & Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#121212]">
            Fabby Stitch’s <span className="font-semibold">Testimonials</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="bg-white p-8 border border-[#E4E4E7] flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-sm text-zinc-700 italic font-normal leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Purchase Details */}
              <div className="pt-4 border-t border-zinc-100 flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#121212]">
                    {t.author}
                  </span>
                  {t.verified && (
                    <span className="text-[10px] text-emerald-700 uppercase tracking-widest font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Order
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-zinc-500">
                  <span>Item: </span>
                  <Link href={t.itemHref} className="text-[#C5A059] underline hover:text-[#121212]">
                    {t.itemPurchased}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
