// app/contact/page.tsx
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | ShareMarket Skills Academy",
  description:
    "Get in touch with ShareMarket Skills Academy. Visit our Govindpuram and Raj Nagar Extension centers in Ghaziabad or contact us via phone and email.",
};

export default function ContactPage() {
  return <ContactClient />;
}
