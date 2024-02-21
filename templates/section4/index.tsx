"use client";
import { Icon, Text } from "@/components";
import React, { useEffect } from "react";
import partner1 from "pngs/section4/partners/Northrop_Grumman.png";
import partner2 from "pngs/section4/partners/Goldman_Sachs.png";
import partner3 from "pngs/section4/partners/GCHQ.png";
import partner4 from "pngs/section4/partners/microsoft-corporation.png";
import partner5 from "pngs/section4/partners/kpmg.png";
import neon1 from "pngs/section4/core-values/neon_1.png";
import neon2 from "pngs/section4/core-values/neon_2.png";
import neon3 from "pngs/section4/core-values/neon_3.png";
import neon4 from "pngs/section4/core-values/neon_4.png";
import Image from "next/image";
import "./style.css";

function Section4() {

    useEffect(() => {
        
    }, []);
  return (
    <section className="md:pt-[128px] pt-[50px] md:px-32 px-4 bg-center bg-cover min-h-screen w-full bg-section4">
      <div className="flex flex-col justify-center items-center">
        <Text
          variant="h3"
          value="OUR Partners"
          className=" uppercase"
          weight={800}
          center={true}
        />
        <div className="flex md:gap-12 gap-2 items-center justify-center mt-4 md:mt-12 flex-wrap">
          <Image width={174} height={59} src={partner1} alt="Nothern" />
          <Image width={126} height={62} src={partner2} alt="Goldman Sachs" />
          <Image width={161} height={46} src={partner3} alt="GCHQ" />
          <Image width={169} height={51} src={partner4} alt="Microsoft" />
          <Image width={128} height={65} src={partner5} alt="KPMG" />
        </div>
        <div className="md:my-20 my-14">
          <Text variant="h2">
            Niyo Core <span className=" font-bold">Values</span>
          </Text>
        </div>
        <div className="">
          <div className="flex justify-center flex-wrap lg:gap-20 md:gap-12">
            {/* Card 1 */}
            <div className="md:h-[489px] max-w-[604px] relative bg-center bg-cover bg-values rounded-3xl overflow-hidden md:p-10 p-6 shadow-lg">
              <Text variant="h3" className="mb-3" weight={600}>
                Ingenuity
              </Text>
              <Text variant="p16">
                Ingenuity to us is excellence: we ensure the best get better,
                innovation for every problem we see, we are the solution,
                creativity imagine, ideate and intimate through tech
              </Text>
              <div className="absolute bottom-0 right-0">
                <Image src={neon1} width={282} height={343} alt="" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="md:h-[489px] max-w-[604px] relative bg-center bg-cover bg-values rounded-3xl overflow-hidden md:p-10 p-6 shadow-lg">
              <Text variant="h3" className="mb-3" weight={600}>
                Care
              </Text>
              <Text variant="p16">
                We care for people, the planet, profit and purpose bringing
                about sustainable economic empowerment in a community committed
                to an audacious pursuit of purpose
              </Text>
              <div className="absolute bottom-0 right-0">
                <Image src={neon2} width={312} height={276} alt="" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="md:h-[489px] max-w-[604px] relative bg-center bg-cover bg-values rounded-3xl overflow-hidden md:p-10 p-6 shadow-lg">
              <Text variant="h3" className="mb-3" weight={600}>
                Integrity
              </Text>
              <Text variant="p16">
                We define integrity as accountability (taking ownership for our
                innovations and responsibility for our remit), honesty and
                openness (clear consistent communication) - we say what we do
                and do what we say
              </Text>
              <div className="absolute bottom-0 right-0">
                <Image src={neon3} width={350} height={300} alt="" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:h-[489px] w-full max-w-[604px] relative bg-center bg-cover bg-values-career rounded-3xl overflow-hidden md:p-10 p-6 shadow-lg">
              <Text
                variant="p18"
                className="mb-3 !text-[#111] leading-7"
                weight={400}
              >
                Explore Careers at Niyo
              </Text>
              <Text
                variant="h3"
                className="mb-3 max-w-[300px]"
                weight={600}
                color="generic-black"
              >
                Want to be a part of our team?
              </Text>
              <div className="absolute bottom-0 right-0">
                <Image src={neon4} width={379} height={359} alt="" />
              </div>
              <div className="absolute bottom-[40px] left-[40px]">
                <div className="p-3 rounded-full bg-black">
                  <Icon set="icon" name="ph:arrow-line-up-right" size="32px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
