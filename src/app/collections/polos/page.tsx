import type { Metadata } from "next";
import PolosCollectionClient from "./PolosCollectionClient";

export const metadata: Metadata = {
  title: "Fabby Stitch Polo Shirts | Premium Apparel",
  description: "Explore the Fabby Stitch Polo Shirt collection and browse available styles, colors and sizes.",
};

export default function PolosPage() {
  return <PolosCollectionClient />;
}
