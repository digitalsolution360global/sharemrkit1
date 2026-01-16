"use client";

import dynamic from "next/dynamic";
import Banner from "@/components/home/Banner";
import CourseSearchBar from "@/components/home/CourseSearchBar";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutFioncaSection from "@/components/home/AboutFioncaSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import BlogSection from "@/components/home/BlogSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

// Dynamically import ScrollVideoSection to disable SSR
const ScrollVideoSection = dynamic(
  () => import("@/components/home/ScrollVideoSection"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <Banner />
      <CourseSearchBar />
      <IntroSection />
      <ServicesSection />
      <AboutFioncaSection />
      <BenefitsSection />
      <ExperienceSection />
      <BlogSection />
      <TeamSection />
      <ScrollVideoSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
