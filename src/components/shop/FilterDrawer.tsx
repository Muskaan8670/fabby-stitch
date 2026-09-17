"use client";

export interface FilterState {
  category: string;
  availability: string; // 'all' | 'in-stock' | 'out-of-stock' | 'on-sale'
  minPrice: number;
  maxPrice: number;
  selectedColors: string[];
  selectedSizes: string[];
  sortBy: string;
}

interface FilterDrawerProps {
  filters: FilterState;
  onChangeFilter: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  totalResults: number;
}

const COLOR_OPTIONS = [
  { name: "Black", hex: "#121212" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Charcoal", hex: "#71717A" },
  { name: "Gray", hex: "#D4D4D8" },
  { name: "Red", hex: "#991B1B" },
  { name: "Navy Blue", hex: "#1E3A8A" },
  { name: "Hot Pink", hex: "#F472B6" },
  { name: "Light Pink", hex: "#FBCFE8" },
  { name: "Gold", hex: "#C5A059" },
];

const SIZE_OPTIONS = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export default function FilterDrawer({
  filters,
  onChangeFilter,
  onResetFilters,
  isOpenMobile,
  onCloseMobile,
  totalResults,
}: FilterDrawerProps) {
  const toggleColor = (colorName: string) => {
    const exists = filters.selectedColors.includes(colorName);
    const updated = exists
      ? filters.selectedColors.filter((c) => c !== colorName)
      : [...filters.selectedColors, colorName];
    onChangeFilter({ selectedColors: updated });
  };

  const toggleSize = (size: string) => {
    const exists = filters.selectedSizes.includes(size);
    const updated = exists
      ? filters.selectedSizes.filter((s) => s !== size)
      : [...filters.selectedSizes, size];
    onChangeFilter({ selectedSizes: updated });
  };

  const filterContent = (
    <div className="space-y-8">
      {/* Active Filter Count Header */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#121212]">
          Refine Products ({totalResults})
        </span>
        <button
          onClick={onResetFilters}
          className="text-[11px] uppercase tracking-wider text-zinc-500 hover:text-[#C5A059] underline font-medium"
        >
          Clear All
        </button>
      </div>

      {/* 1. Availability Filter */}
      <div className="space-y-3">
        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#121212]">
          Availability
        </h4>
        <div className="space-y-2 text-xs">
          {[
            { id: "all", label: "All Items" },
            { id: "in-stock", label: "In Stock" },
            { id: "out-of-stock", label: "Out of Stock" },
            { id: "on-sale", label: "On Sale" },
          ].map((item) => (
            <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-[#121212] text-zinc-600">
              <input
                type="radio"
                name="availability"
                checked={filters.availability === item.id}
                onChange={() => onChangeFilter({ availability: item.id })}
                className="w-3.5 h-3.5 accent-[#121212]"
              />
              <span className="uppercase tracking-wider text-[11px]">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 2. Price Range Filter */}
      <div className="space-y-3 border-t border-zinc-200 pt-6">
        <div className="flex justify-between items-center text-xs uppercase tracking-wider font-semibold text-[#121212]">
          <span>Price Range</span>
          <span className="text-zinc-500 font-normal text-[11px]">
            ${filters.minPrice} – ${filters.maxPrice}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="text-[10px] uppercase text-zinc-400 block mb-1">Min ($)</label>
            <input
              type="number"
              min={0}
              max={100}
              value={filters.minPrice}
              onChange={(e) => onChangeFilter({ minPrice: Number(e.target.value) })}
              className="w-full px-2.5 py-1.5 border border-zinc-300 bg-white text-xs font-semibold focus:border-zinc-900 outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase text-zinc-400 block mb-1">Max ($)</label>
            <input
              type="number"
              min={0}
              max={100}
              value={filters.maxPrice}
              onChange={(e) => onChangeFilter({ maxPrice: Number(e.target.value) })}
              className="w-full px-2.5 py-1.5 border border-zinc-300 bg-white text-xs font-semibold focus:border-zinc-900 outline-none"
            />
          </div>
        </div>
      </div>

      {/* 3. Color Filter */}
      <div className="space-y-3 border-t border-zinc-200 pt-6">
        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#121212]">
          Color
        </h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {COLOR_OPTIONS.map((c) => {
            const isChecked = filters.selectedColors.includes(c.name);
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => toggleColor(c.name)}
                className={`flex items-center gap-2 p-1.5 border text-[11px] uppercase tracking-wider transition-all text-left ${
                  isChecked
                    ? "border-[#121212] bg-white font-semibold text-[#121212] shadow-sm"
                    : "border-zinc-200 bg-white/50 text-zinc-600 hover:border-zinc-400"
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-zinc-300 flex-shrink-0"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="truncate">{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Size Filter */}
      <div className="space-y-3 border-t border-zinc-200 pt-6">
        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#121212]">
          Size
        </h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {SIZE_OPTIONS.map((sz) => {
            const isChecked = filters.selectedSizes.includes(sz);
            return (
              <button
                key={sz}
                type="button"
                onClick={() => toggleSize(sz)}
                className={`min-w-[38px] px-2.5 py-1.5 border text-xs font-semibold uppercase tracking-wider transition-all ${
                  isChecked
                    ? "border-[#121212] bg-[#121212] text-white shadow-sm"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900"
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-28 bg-[#FAF9F6] border border-zinc-200 p-6 space-y-6">
          {filterContent}
        </div>
      </aside>

      {/* Mobile Filter Drawer Slide-over */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="relative w-full max-w-xs bg-[#FAF9F6] h-full p-6 overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Filters</h3>
              <button
                onClick={onCloseMobile}
                className="p-1 text-zinc-500 hover:text-zinc-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {filterContent}
            <div className="pt-4 border-t border-zinc-200">
              <button
                onClick={onCloseMobile}
                className="w-full py-3 bg-[#121212] text-[#FAF9F6] text-xs uppercase tracking-widest font-semibold"
              >
                Apply Filters ({totalResults})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
