// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | ShareMarket Skills Academy",
  description:
    "Learn about ShareMarket Skills Academy – our mission, vision, and expert-led approach to stock market education, trading, and investments.",
};

export default function AboutPage() {
  return <AboutClient />;
}
