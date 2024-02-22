// ProfileCard.tsx
import React, { FC, useEffect } from "react";
import { Button2, Text } from "@/components";
import Profile1 from "@/assets/pngs/media/1.png";
import Profile2 from "@/assets/pngs/media/2.png";
import Profile3 from "@/assets/pngs/media/3.png";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProfileCardProps {
  imageSrc: StaticImageData | string;
  brandSrc: StaticImageData | string;
  name: string;
}

const NiyoMedia: FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".media",
        start: "top 50%",
        id: "timeline2", // Setting ID for the second ScrollTrigger
      },
    });
    tl
      .fromTo(
        ".title",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeOut" }
      )
      .fromTo(
        ".button",
        {
          opacity: 0,
          autoAlpha: 0,
          yPercent: -50,
          transformStyle: "preserve-3d",
        },
        { autoAlpha: 1, yPercent: 0, opacity: 1, ease: "easeOut" }
      )
      .fromTo(
        ".cards",
        {
          opacity: 0,
          yPercent: 20,
          duration: 2,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.2, 
          yPercent: 0,
        }
      );

    return () => {
      // Kill GSAP timelines
      tl.kill();

      // Kill ScrollTriggers by ID
      ScrollTrigger.getById("timeline2")?.kill();
    };
  }, []);
  const media: ProfileCardProps[] = [
    {
      imageSrc: Profile1,
      brandSrc: Profile1,
      name: "Oyinkansola , Ceo Niyo Group on Birmingham Tech",
    },
    {
      imageSrc: Profile2,
      brandSrc: Profile1,
      name: "Oyinkansola , Ceo Niyo Group on Birmingham Tech",
    },
    {
      imageSrc: Profile3,
      brandSrc: Profile1,
      name: "Oyinkansola , Ceo Niyo Group on Birmingham Tech",
    },
  ];

  const LocationCard = ({ name, imageSrc }: ProfileCardProps) => {
    return (
      <div className="overflow-hidden  ">
        <div className="w-[350px] h-[auto] cards">
          <Image
            className="w-full"
            src={imageSrc}
            alt={`profile`}
            width={200}
            height={200}
          />
          <div className="px-6 py-4">
            <Text
              variant="p16"
              value={name}
              color="generic-black"
              weight={400}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-media bg-cover bg-center media">
      <div className=" mx-auto w-full max-w-[1550px]">
        <div className=" md:px-28 px-6 pb-[180px] pt-[100px]">
          <div
            className="flex justify-between items-center overflow-hidden my-0"
            data-animation="media"
          >
            <div className="flex items-center gap-3 title">
              <Text
                variant="h1medium"
                value="Niyo"
                color="generic-black"
                weight={400}
              />
              <Text
                variant="h1medium"
                value="Media"
                color="generic-black"
                weight={600}
              />
            </div>
            <Button2
              rounded
              className=" !bg-generic-black button"
              label="Read More"
            />
          </div>

          <div
            className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-center md:gap-14 gap-11 mt-[70px]"
            data-animation="media"
          >
            {media.map((location, idx) => (
              <LocationCard key={idx} {...location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NiyoMedia;
