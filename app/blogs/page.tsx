// app/blogs/page.tsx
import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blogs | ShareMarket Skills Academy",
  description:
    "Read the latest blogs from ShareMarket Skills Academy on stock market, trading strategies, artificial intelligence, and financial education.",
};

export default function BlogsPage() {
  return <BlogClient />;
}
