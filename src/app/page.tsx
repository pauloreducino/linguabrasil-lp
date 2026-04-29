import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Method from "./components/Method";
import Differentials from "./components/Differentials";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

/* Page-level metadata override (inherits from layout) */
export const metadata: Metadata = {
  title: "Língua Brasil — Learn Brazilian Portuguese Online with a Native Teacher",
  description:
    "Book a free trial Portuguese class with Ana, a native Brazilian teacher. Personalized, immersive method for students from 30+ countries. Speak Portuguese with confidence!",
};

/*
 * This page is fully statically generated at build time (SSG).
 * Next.js App Router defaults to static rendering for pages
 * with no dynamic data or cookies. No revalidate needed.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Method />
        <Differentials />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
