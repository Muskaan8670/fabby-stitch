import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Fabby Stitch",
  description: "Find answers to common questions about Fabby Stitch retail apparel, custom embroidery, screen printing, shipping times, and order policies.",
};

export default function FAQPage() {
  return <FaqClient />;
}
