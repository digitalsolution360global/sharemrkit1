import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Courses | Share Market Skills Academy",
  description:
    "Explore stock market courses including Trading, Algo Trading, Mutual Funds, Bonds and Demat Account training at Share Market Skills Academy.",
};

export default function CoursesPage() {
  return <CoursesClient />;
}
