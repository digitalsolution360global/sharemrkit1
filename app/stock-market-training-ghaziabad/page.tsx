import type { Metadata } from "next";
import StockClient from "./stockMarketClient";

export const metadata: Metadata = {
  title: "Best Stock Market Training in Ghaziabad 2026 | Share Market Skills Academy",
  description:
    "Unlock your financial potential with the best stock market training in Ghaziabad at Share Market Skills Academy.",
};

export default function StockMarketPage() {
  return <StockClient />;
}
