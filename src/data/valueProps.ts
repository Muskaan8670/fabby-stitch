export interface ValuePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: "ny-workshop",
    number: "01",
    title: "New York Workshop",
    subtitle: "NYC Origin & Direct Craftsmanship",
    description:
      "Direct workshop origin and tailored craftsmanship. Every piece is constructed with precision by experienced apparel makers in New York.",
    badge: "NYC Workshop",
  },
  {
    id: "gsm-quality",
    number: "02",
    title: "300+ GSM Quality",
    subtitle: "Heavyweight Cotton & Construction",
    description:
      "Substantial garment weight using high-density combed cotton, custom ribbing, and reinforced seam structures engineered to last.",
    badge: "300–500 GSM Specs",
  },
  {
    id: "fast-turnaround",
    number: "03",
    title: "Fast Turnaround",
    subtitle: "Efficient Production & Dispatch",
    description:
      "Streamlined workshop production and reliable turnaround for custom embroidery, screen printing, and blanks dispatch without delays.",
    badge: "Express Dispatch",
  },
  {
    id: "zero-moq",
    number: "04",
    title: "0 MOQ",
    subtitle: "No Minimum Order Quantities",
    description:
      "No minimum quantity barriers. Order single bespoke prototypes or scale seamlessly into high-volume corporate production runs.",
    badge: "1 to 10,000+ Units",
  },
];
