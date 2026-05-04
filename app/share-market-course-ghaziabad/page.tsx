import type { Metadata } from "next";
import ShareClient from "./shareMarketClient";

export const metadata: Metadata = {
  title: "Top-Rated Share Market Course in Ghaziabad | SMSA Trading Academy",
  description:
    "Join SMSA, the leading trading academy in Ghaziabad, for expert-led share market courses. Master technical analysis, options trading, and investment strategies with practical, live-market training designed for beginners and pros alike.",
};

export default function ShareMarketPage() {
  return <ShareClient />;
}
