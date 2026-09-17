import { ANNOUNCEMENT_TEXT } from "@/data/navigation";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#121212] text-[#FAF9F6] py-2 px-4 text-[11px] sm:text-xs tracking-widest uppercase font-medium text-center border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
        <span>{ANNOUNCEMENT_TEXT}</span>
      </div>
    </div>
  );
}
