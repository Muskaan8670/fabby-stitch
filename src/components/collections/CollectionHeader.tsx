import Link from "next/link";

interface CollectionHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  showBackLink?: boolean;
}

export default function CollectionHeader({
  eyebrow = "Curated Selection",
  title,
  description,
  showBackLink = false,
}: CollectionHeaderProps) {
  return (
    <div className="w-full bg-[#FAF9F6] border-b border-[#E4E4E7] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        {showBackLink && (
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-medium hover:underline mb-2"
          >
            ← Back To All Collections
          </Link>
        )}
        <div className="space-y-2">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium block">
            {eyebrow}
          </span>
          <h1 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#121212] leading-[1.08]">
            {title}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
