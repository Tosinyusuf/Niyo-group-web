"use client";
import { split } from "@/animation/common";
import LandingHeader from "@/components/header";
import { navLinks } from "@/configs/landing";
import FooterSection from "@/templates/landing/footer";
import HeroSection from "@/templates/landing/hero";
import Section2 from "@/templates/landing/section2";
import Section3 from "@/templates/landing/section3";
import Section4 from "@/templates/landing/section4";
import Office from "@/templates/landing/offices";
import Media from "@/templates/landing/media";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    split();
  }, []);
  return (
    <main>
      {/* <div className="max-w-[1440px] my-0 mx-auto"> */}
        <LandingHeader navLinks={navLinks} waitlist="kojij" />
        {/* <HeroSection />
        <Section2 />
        <Section3 />*/}
        <Section4 /> 
        <Office />
        <Media />
        <FooterSection />
      {/* </div> */}
    </main>
  );
}
