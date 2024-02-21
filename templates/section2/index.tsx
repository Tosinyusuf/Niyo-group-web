"use client";
import { Button2, Text } from "@/components";
import Image from "next/image";
import React, { useEffect } from "react";
import NhbDesktop from "pngs/nhb/nhb-mobile-desktop.png";
import PlaySlayCareDesktop from "pngs/nhb/playcareslay-desktop.png";
import HairColorDesktop from "pngs/nhb/haircolours-desktop.png";
import AfroHairDesktop from "pngs/nhb/afrohair-desktop.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Section2() {
  useEffect(() => {
    console.log("Section");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 20%",
        id: "timeline1", // Setting ID for the first ScrollTrigger
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 50%",
        id: "timeline2", // Setting ID for the second ScrollTrigger
      },
    });
    tl2
      .fromTo(
        ".nhb-header",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeOut" }
      )
      .fromTo(
        ".nhb-subtext",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeOut" }
      )
      .fromTo(
        ".nhb-cta",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeOut" }
      );
    tl.fromTo(
      ".nhb-desktop",
      {
        opacity: 0,
        yPercent: 20,
        duration: 2,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    )
      .fromTo(
        ".playcare-desktop",
        {
          opacity: 0,
          rotate: 90,
          scale: 2,
        },
        {
          opacity: 1,
          rotate: 0,
          scale: 1,
        }
      )
      .fromTo(
        ".haircolor-desktop, .afrohair-desktop",
        {
          opacity: 0,
          scale: 0.3,
        },
        {
          opacity: 1,
          scale: 1,
        }
      );
    return () => {
      // Kill GSAP timelines
      tl.kill();
      tl2.kill();

      // Kill ScrollTriggers by ID
      ScrollTrigger.getById("timeline1")?.kill();
      ScrollTrigger.getById("timeline2")?.kill();
    };
  }, []);

  return (
    <section className="md:pt-[128px] pt-[50px] px-4 section-2">
      <div className="flex flex-col gap-6 items-center">
        <div className="nhb-header">
          <Text variant="h1" value="Niyo Hair and beauty" />
        </div>
        <div className="md:max-w-[600px] max-w-[364px] text-center nhb-subtext">
          <Text
            variant="p16"
            value="Niyo Hair and Beauty is building the future of women’s hair with AI and AR technology"
            weight={400}
          />
        </div>
        <Button2
          rounded
          className=" !bg-rdr-pink-500 text-black nhb-cta"
          label="Niyo Hair & Beauty"
          iconRight={{
            set: "icon",
            name: "ph:arrow-line-up-right",
            size: "32px",
            style: {
              backgroundColor: "#fff",
              borderRadius: "100px",
              padding: "5px",
            },
          }}
        />
        <div className="relative">
          <Image
            src={NhbDesktop}
            alt="NHB Desktop"
            width={612}
            height={964}
            className="nhb-desktop"
          />
          <Image
            src={PlaySlayCareDesktop}
            alt="NHB Desktop"
            width={258}
            height={285}
            className="absolute top-0 md:top-[-80px] md:left-[-150px] right-0 playcare-desktop"
          />
          <Image
            src={HairColorDesktop}
            alt="NHB Desktop"
            width={576}
            height={150}
            className="absolute  top-[280px] md:right-[-295px] right-0 haircolor-desktop"
          />
          <Image
            src={AfroHairDesktop}
            alt="NHB Desktop"
            width={684}
            height={236}
            className="absolute  bottom-[160px] md:left-[-245px] left-0 afrohair-desktop"
          />
        </div>
      </div>
    </section>
  );
}

export default Section2;
