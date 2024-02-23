// Awards.tsx
import React, { FC, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Text } from "@/components";
import MBC from "@/assets/png/MBCC Awards.png";
import LeftFlower from "@/assets/png/leaf 1.png";
import RightFlower from "@/assets/png/leaft 2.png";
import Entrepreneur from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 6.png";
import Innovation from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 5.png";
import Tech from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 4.png";
import Business from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 3.png";
import Barclays from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AwardsProps {
  imageSrc: StaticImageData | string;
}

const Awards: FC = () => {
  useEffect(() => {
    console.log("Section");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".awards",
        start: "top 20%",
        id: "timeline1", // Setting ID for the first ScrollTrigger
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".awards",
        start: "top 50%",
        id: "timeline2", // Setting ID for the second ScrollTrigger
      },
    });
    tl2
      .fromTo(
        ".awards-header",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -20,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeIn" }
      )
      .fromTo(
        ".award1",
        {
          opacity: 1,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
          rotation: -45, // Start rotated -45 degrees for example
          scale: 0.001, // Start with a smaller width
          transformOrigin: "50% 50%",
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "easeIn",
          rotation: 0, // End rotation at 0 degrees (no rotation)
          scale: 1, // Animate to full width
          duration: 0.5,
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

  const awards: AwardsProps[] = [
    {
      imageSrc: MBC,
    },
    {
      imageSrc: Barclays,
    },
    {
      imageSrc: Business,
    },
    {
      imageSrc: Tech,
    },
    {
      imageSrc: Innovation,
    },
    {
      imageSrc: Entrepreneur,
    },
  ];
  return (
    <div className="text-center awards">
      <div className="mx-auto w-full max-w-[1550px]">
        <div className="flex items-center justify-center awards-header">
          <div className="w-[40px] md:w-[70px]">
            <Image
              className="max-w-full w-full"
              src={LeftFlower}
              alt={`flower`}
              width={70}
              height={10}
            />
          </div>
          <Text
            variant="h2"
            value="Awards & Recognition"
            color="shades-50"
            weight={400}
          />
          <div className="w-[40px] md:w-[70px]">
            <Image
              className="max-w-full w-full"
              src={RightFlower}
              alt={`flower`}
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1550px] grid grid-cols-2 md:grid-cols-6 justify-center items-center mt-8">
          {awards.map((awards, idx) => (
            <div key={idx} className="award1">
              <Image
                className="w-full "
                src={awards?.imageSrc}
                alt={`Awards`}
                width={600}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
