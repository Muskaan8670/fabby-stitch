export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Choose Your Style",
    description:
      "Start with one of our signature silhouettes or explore options for your custom apparel.",
  },
  {
    number: "02",
    title: "Make It Yours",
    description:
      "Select fabrics, colors, details, sizing, and personalization to create your preferred look.",
  },
  {
    number: "03",
    title: "We Craft It",
    description:
      "Our team turns your selections into a finished garment with careful construction and precision stitching.",
  },
  {
    number: "04",
    title: "We Deliver Your Fit",
    description:
      "Your completed piece is prepared and delivered, ready to become part of your wardrobe.",
  },
];
