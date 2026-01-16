import type { Metadata } from "next";
import InvestmentClient from "./InvestmentClient";

export const metadata: Metadata = {
  title:
    "Investment Advisory & Wealth Management Services | Share Market Skills Academy",
  description:
    "Grow your wealth with expert investment advisory, mutual funds, stock market investing, and long-term financial planning. Trusted investment guidance for beginners & professionals.",
  keywords:
    "investment advisory, wealth management, stock market investment, mutual funds, long term investing, financial planning, share market academy",
};

export default function InvestmentPage() {
  return <InvestmentClient />;
}
