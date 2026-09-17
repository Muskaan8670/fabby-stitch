import type { Metadata } from "next";
import CapsCollectionClient from "./CapsCollectionClient";

export const metadata: Metadata = {
  title: "Fabby Stitch Caps & Headwear | Premium Apparel",
  description: "Explore the Fabby Stitch Caps & Headwear collection and browse available styles, colors and sizes.",
};

export default function CapsPage() {
  return <CapsCollectionClient />;
}
