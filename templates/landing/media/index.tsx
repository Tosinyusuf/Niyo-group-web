// ProfileCard.tsx
import React, { FC } from "react";
import { Button2, Text } from "@/components";
import Profile1 from "@/assets/pngs/media/1.png";
import Profile2 from "@/assets/pngs/media/2.png";
import Profile3 from "@/assets/pngs/media/3.png";
import Image, { StaticImageData } from "next/image";

interface ProfileCardProps {
  imageSrc: StaticImageData | string;
  brandSrc: StaticImageData | string;
  name: string;
}

const NiyoMedia: FC = () => {
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
        <div className="w-[350px] h-[auto]">
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
    <section className="bg-media bg-cover bg-center">
      <div className=" mx-auto w-full max-w-[1550px]">
        <div className=" md:px-28 px-6 pb-[180px] pt-[100px]">
          <div className="flex justify-between items-center overflow-hidden my-0">
            <div className="flex items-center gap-3">
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
              className=" !bg-generic-black "
              label="Read More"
            />
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between items-center md:gap-14 gap-11 mt-[70px]">
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
