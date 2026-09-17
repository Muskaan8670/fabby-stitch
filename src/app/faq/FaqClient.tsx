"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FAQ_DATA, FAQItem } from "@/data/faq";

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItemIds, setOpenItemIds] = useState<Set<string>>(
    new Set(["faq-1", "faq-5"]) // Default open popular questions
  );

  const toggleItem = (id: string) => {
    setOpenItemIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filter Categories & Items based on Category Tab and Search Query
  const filteredCategories = useMemo(() => {
    return FAQ_DATA.map((cat) => {
      // Category filter check
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return { ...cat, items: [] };
      }

      // Search query check
      if (!searchQuery.trim()) return cat;

      const q = searchQuery.toLowerCase().trim();
      const matchingItems = cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      );

      return { ...cat, items: matchingItems };
    }).filter((cat) => cat.items.length > 0);
  }, [activeCategory, searchQuery]);

  const totalResults = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#121212] font-sans antialiased">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-zinc-200/80 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 font-medium">
            <Link href="/" className="hover:text-zinc-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-zinc-900 font-semibold">Frequently Asked Questions</span>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <section className="bg-white border-b border-[#E4E4E7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                <span>Fabby Stitch</span>
                <span>/</span>
                <span>Support & Info</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-tight text-[#121212]">
                Frequently Asked <span className="font-semibold">Questions.</span>
              </h1>
              <p className="max-w-2xl text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                Find clear answers regarding our retail apparel collections, custom embroidery, screen printing services, shipping times, and order policies.
              </p>
            </div>

            {/* Realtime Search Bar */}
            <div className="max-w-xl relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., embroidery, MOQ, shipping, sizing)..."
                className="w-full pl-11 pr-4 py-3.5 bg-[#FAF9F6] border border-[#E4E4E7] text-xs sm:text-sm text-[#121212] focus:outline-none focus:border-[#121212] transition-colors shadow-sm"
              />
              <svg className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-900"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 3. Category Filter Tabs */}
        <section className="w-full border-b border-[#E4E4E7] bg-white sticky top-0 z-20 shadow-sm overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-4 py-3 min-w-max">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all border ${
                activeCategory === "all"
                  ? "bg-[#121212] text-[#FAF9F6] border-[#121212] shadow-sm"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-[#121212]"
              }`}
            >
              ALL TOPICS
            </button>
            {FAQ_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold transition-all border ${
                  activeCategory === cat.id
                    ? "bg-[#121212] text-[#FAF9F6] border-[#121212] shadow-sm"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-[#121212]"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </section>

        {/* 4. FAQ Accordion Main Content */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-14">
          {totalResults === 0 ? (
            <div className="bg-white border border-zinc-200 p-12 text-center space-y-4 max-w-md mx-auto my-12">
              <h3 className="text-lg font-semibold uppercase tracking-wider">NO MATCHING QUESTIONS FOUND</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                No questions matched your search query &quot;{searchQuery}&quot;. Try searching for &quot;embroidery&quot;, &quot;shipping&quot;, or &quot;custom&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="inline-block px-6 py-3 bg-[#121212] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] transition-all"
              >
                CLEAR SEARCH
              </button>
            </div>
          ) : (
            filteredCategories.map((catGroup) => (
              <div key={catGroup.id} className="space-y-6">
                <div className="border-b border-[#E4E4E7] pb-3 flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-tight text-[#121212]">
                    {catGroup.category}
                  </h2>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] font-medium">
                    {catGroup.items.length} {catGroup.items.length === 1 ? "QUESTION" : "QUESTIONS"}
                  </span>
                </div>

                <div className="space-y-4">
                  {catGroup.items.map((item: FAQItem) => {
                    const isOpen = openItemIds.has(item.id);
                    return (
                      <div
                        key={item.id}
                        className="bg-white border border-[#E4E4E7] transition-colors duration-200 hover:border-zinc-400"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${item.id}`}
                          className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#121212] focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                        >
                          <span className="pr-2">{item.question}</span>
                          <span
                            className={`w-7 h-7 rounded-full bg-[#FAF9F6] border border-[#E4E4E7] flex items-center justify-center text-xs font-mono font-bold text-[#121212] shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-45 bg-[#121212] text-white border-[#121212]" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            id={`faq-answer-${item.id}`}
                            className="px-6 pb-6 pt-0 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal border-t border-zinc-100 space-y-3 mt-1"
                          >
                            <p className="pt-3">{item.answer}</p>

                            {item.linkHref && (
                              <div className="pt-2">
                                {item.linkHref.startsWith("http") ? (
                                  <a
                                    href={item.linkHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] uppercase tracking-wider hover:underline"
                                  >
                                    <span>{item.linkLabel || "Learn More"}</span>
                                    <span>→</span>
                                  </a>
                                ) : (
                                  <Link
                                    href={item.linkHref}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] uppercase tracking-wider hover:underline"
                                  >
                                    <span>{item.linkLabel || "Learn More"}</span>
                                    <span>→</span>
                                  </Link>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </section>

        {/* 5. Still Have Questions CTA Banner */}
        <section className="w-full bg-[#121212] text-[#FAF9F6] py-14 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
                Direct Studio Support
              </span>
              <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-white">
                Still Have <span className="font-semibold text-white">Questions?</span>
              </h3>
              <p className="text-xs text-zinc-400">
                Our New York technical team is available to assist with custom quotes, sample proofs, or order tracking.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FAF9F6] text-[#121212] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl flex-shrink-0"
              >
                Contact Studio →
              </Link>
              <Link
                href="/custom-order"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-white text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#121212] transition-all duration-300 flex-shrink-0"
              >
                Get Custom Quote →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
