"use client";

import Banner from "@/components/Home/Banner";
import BlogSection from "@/components/Home/BlogCard";
import FAQSection from "@/components/Home/Faq";
import Services from "@/components/Home/Services";
import Skill from "@/components/Home/Skill";
import Projects from "@/components/Projects/Projects";

export default function PortfolioBanner() {
  return (
    <div>
      <Banner />
      <Projects />
      <Skill />
      <BlogSection />
      <Services />
      <FAQSection />
    </div>
  );
}
