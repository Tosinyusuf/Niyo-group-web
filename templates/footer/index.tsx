// App.tsx or wherever you want to include the footer
import React from "react";
import Logo from "svgs/logos/Logo.svg";
import { Text, Lines } from "@/components";
import BackgroundFooter from "@/assets/png/Footer.png";
import Foundation from "svgs/logos/badge.svg";
import Image, { StaticImageData } from "next/image";

interface FooterProps {
  title: string;
  columns: Array<{
    title: string;
    links: Array<{ text: string; href: string }>;
  }>;
  bottomText: string;
}

interface FooterColumnProps {
  title: string;
  links: Array<{ text: string; href: string }>;
}
const footerData = {
  title: "Creating Disruptive technologies that drive society forward",
  columns: [
    {
      title: "CONTACT US",
      links: [
        { text: "hello@niyo.co", href: "mailto:hello@niyo.co" },
        { text: "0121 828 9210", href: "tel:01218289210" },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { text: "Niyo Hair and Beauty", href: "#" },
        { text: "NiyoLabs", href: "#" },
        { text: "NiyoFest", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { text: "Careers", href: "#" },
        { text: "Awards", href: "#" },
        { text: "Press", href: "#" },
        { text: "Partners", href: "#" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { text: "Privacy", href: "#" },
        { text: "Terms of Service", href: "#" },
      ],
    },
    {
      title: "Our Links",
      links: [
        { text: "Pitch Deck", href: "#" },
        { text: "Bootcamps", href: "#" },
        { text: "Shop", href: "#" },
      ],
    },
    {
      title: "Explore",
      links: [
        { text: "NiyoFest", href: "#" },
        { text: "Videos", href: "#" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { text: "Help Center", href: "#" },
        { text: "FAQ", href: "#" },
      ],
    },
  ],
  bottomText:
    "Niyo Group is a group of distinct award-winning brands focused on disrupting the educational and Beauty industries. We are a for-profit company that seeks to achieve financial growth while prioritizing the Planet, People and Purpose.",
};

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <Text
        variant="p18"
        value={title}
        color="shades-50"
        weight={500}
        className="mb-[14px]"
      />
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text
            variant="p14"
            value={link.text}
            color="shades-50"
            weight={200}
            className="mb-[14px]"
          />
        </a>
      ))}
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ title, columns, bottomText }) => {
  return (
    <footer className="max-w-[1550px] w-full mx-auto">
      <div className=" md:px-28 px-6 mx-auto mt-[110px]">
        <div className="text-center mb-[164px] w-full md:w-[65%] mx-auto">
          <Text variant="h2" value={title} color="shades-50" weight={400} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
          {columns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        <Foundation />
      </div>
      <div className="flex gap-[70px] items-start mt-[36px] md:px-28 px-6 mx-auto bg-[#09050F] py-3">
        <div>
          <Logo />
        </div>
        <Text
          variant="p14"
          value={bottomText}
          color="shades-50"
          weight={400}
          className="mt-[7px]"
        />
      </div>
    </footer>
  );
};
const FooterSection: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-footer bg-cover bg-center text-white px-0">
      <Footer {...footerData} />
    </div>
  );
};

export default FooterSection;
