"use client";
import { split } from "@/animation/common";
import LandingHeader from "@/components/header";
import { navLinks } from "@/configs/landing";
import FooterSection from "@/templates/footer";
import HeroSection from "@/templates/hero";
import Section2 from "@/templates/section2";
import Section3 from "@/templates/section3";
import Section4 from "@/templates/section4";
import Office from "@/templates/offices";
import Media from "@/templates/media";
import Awards from "@/templates/awards";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    split();
  }, []);
  return (
    <main>
      {/* <div className="max-w-[1440px] my-0 mx-auto"> */}
        <LandingHeader navLinks={navLinks} waitlist="kojij" />
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Awards />
        <Office />
        <Media />
        <FooterSection />
      {/* </div> */}
    </main>
  );
}
