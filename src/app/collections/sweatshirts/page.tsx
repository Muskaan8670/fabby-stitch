import type { Metadata } from "next";
import SweatshirtsCollectionClient from "./SweatshirtsCollectionClient";

export const metadata: Metadata = {
  title: "Fabby Stitch Sweatshirts | Premium Apparel",
  description: "Explore the Fabby Stitch Sweat Shirt collection and browse available styles, colors and sizes.",
};

export default function SweatshirtsPage() {
  return <SweatshirtsCollectionClient />;
}
