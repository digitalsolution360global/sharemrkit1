// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Best Share Market Institute in Ghaziabad",
  description:
    "Discover why ShareMarket Skills Academy is the best share market institute in Ghaziabad. Get expert mentorship, live trading sessions & practical learning.",
};

export default function AboutPage() {
  return <AboutClient />;
}
