import React, { createRef, useEffect, useLayoutEffect } from "react";
import Lottie from "lottie-web";
import NiyoLabsLotti from "animation/Niyo-Labs-Lotti.json";
import { Button2, Text } from "@/components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Section3() {
  const desktopContainer = createRef<HTMLDivElement>();
  useEffect(() => {
    const desktopInstance = Lottie.loadAnimation({
      container: desktopContainer.current!,
      animationData: NiyoLabsLotti,
      loop: false,
      autoplay: false,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-3",
        start: "top 30%",
        // scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        id: "timeline3", // Setting ID for the second ScrollTrigger
      },
    });
    tl2
      .fromTo(
        ".niyolabs-header",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          opacity: 1,
          ease: "easeOut",
          onStart: () => desktopInstance.play(),
        }
      )
      .fromTo(
        ".niyolabs-subtext",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeOut" }
      )
      .fromTo(
        ".niyolabs-cta",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeOut" }
      );

    // Return clean up function here
    return () => {
      desktopInstance.destroy();
      tl2.kill();

      // Kill ScrollTriggers by ID
      ScrollTrigger.getById("timeline3")?.kill();
    };
  }, [desktopContainer]);
  return (
    <section className="md:py-[128px] py-[50px] px-4 bg-[#161616] section-3 ">
      <div className="max-w-[1550px] mx-auto w-full">
        <div className="flex flex-col gap-6 items-center">
          <div className="niyolabs-header">
            <Text variant="h1" value="Niyolabs" />
          </div>
          <div className="md:max-w-[600px] max-w-[364px] text-center niyolabs-subtext">
            <Text
              variant="p16"
              value="Niyo Labs redefines learning by integrating education with real-world rewards. As a pioneering 'learn to earn' platform, we offer an immersive educational experience that extends beyond traditional boundaries."
              weight={400}
            />
          </div>
          <Button2
            label="NiyoLabs"
            rounded
            className=" !bg-gd-lemon-400 text-black niyolabs-cta"
            iconRight={{
              set: "icon",
              name: "ph:arrow-line-up-right",
              size: "32px",
              color: "#fff",
              style: {
                backgroundColor: "#000",
                borderRadius: "100px",
                padding: "5px",
              },
            }}
          />
        </div>
        <div ref={desktopContainer}></div>
      </div>
    </section>
  );
}

export default Section3;
