// Awards.tsx
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Button2, Text, Lines } from "@/components";
import MBC from "@/assets/png/MBCC Awards.png";
import LeftFlower from "@/assets/png/leaf 1.png";
import RightFlower from "@/assets/png/leaft 2.png";
import Entrepreneur from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 6.png";
import Innovation from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 5.png";
import Tech from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 4.png";
import Business from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 3.png";
import Barclays from "@/assets/png/Black White Classic Best Product Award Laurel Wreath Logo 2.png";

interface AwardsProps {
  imageSrc: StaticImageData | string;
}

const Awards: FC = () => {
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
      <div className="text-center w-full">
        <div className="">
          <div className="flex items-center justify-center">
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
          <div className="grid grid-cols-2 md:grid-cols-6 justify-center items-center mt-8">
            {awards.map((awards, idx) => (
              <div key={idx} className="">
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
