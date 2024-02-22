// OfficeLocations.tsx
import React, { FC, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Button2, Text } from "@/components";
import Lagos from "@/assets/png/Rectangle 231.png";
import Birmingham from "@/assets/png/Rectangle 232.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LocationProps {
  name: string;
  imageSrc: StaticImageData | string;
}

interface LocationCardProps {
  name: string;
  imageSrc: StaticImageData | string;
}

const OfficeLocations: FC = () => {

  const locations: LocationProps[] = [
    {
      name: "Birmingham",
      imageSrc: Lagos,
    },
    {
      name: "Lagos",
      imageSrc: Birmingham,
    },
    // ... other locations
  ];

  const LocationCard = ({ name, imageSrc }: LocationCardProps) => {
    return (
      <div className="overflow-hidden shadow-lg rounded-[32px] office-img">
        <div className="w-[580px] h-[500px] relative">
          <Image
            className="w-full"
            src={imageSrc}
            alt={`Office in ${name}`}
            width={500}
            height={600}
          />
          <div className="px-6 py-4 absolute bottom-0">
            <Text
              variant="h1medium"
              value={name}
              className="office-text"
              color="shades-50"
              weight={600}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-100 text-center w-full">
      <div className="mx-auto w-full max-w-[1550px]">
        <div className="md:px-28 px-6 py-[128px]">
          <div data-animation="office">
            <Text
              variant="h1"
              value="Our Offices"
              color="generic-black"
              weight={700}
              className="pb-[22px] office-title"
            />
          </div>
          <div data-animation="office">
            <Text
              variant="p16"
              value="We are located in the Birmingham and Lagos"
              color="generic-black"
              className="office-description"
              weight={400}
            />
          </div>
          <div className="flex flex-wrap justify-between gap-8 mt-8" data-animation="office">
            {locations.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-[48px]" data-animation="office">
            <Button2
              //   rounded
              className=" !bg-generic-black office-btn"
              label="View Our Careers"
              size="md"
              iconRight={{
                set: "icon",
                name: "ph:arrow-line-up-right",
                size: "32px",
                style: {
                  borderRadius: "100px",
                  padding: "5px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
