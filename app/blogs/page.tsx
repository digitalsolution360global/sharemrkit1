// app/blogs/page.tsx
import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Stock Market Blogs & Trading Guides | ShareMarket Skills Academy",
  description:
    "Stay updated with stock market tips, trading strategies & expert insights from the best share market institute in Ghaziabad. Learn and grow your trading skills",
};

export default function BlogsPage() {
  return <BlogClient />;
}
