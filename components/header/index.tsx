import React from "react";
import Logo from "svgs/logos/Logo.svg";
import { nanoid } from "nanoid";
import { Button2, Text } from "@/components";
import Link from "next/link";

function LandingHeader({
  navLinks,
  waitlist,
}: {
  navLinks: { label: string; href: string }[];
  waitlist: string;
}) {
  return (
    <section className="absolute top-0 z-10  w-full ">
      <header className="py-8 md:px-28 px-6 w-full mx-auto  max-w-[1512px]">
        <nav className=" items-center flex justify-between">
          <Logo />
          <ul className="flex items-center md:gap-16">
            {navLinks.map((link) => (
              <li key={nanoid()}>
                <Link href={link.href}>
                  <Text variant="p16" value={link.label} color="neutral-300" />
                </Link>
              </li>
            ))}
            <li>
              <Button2
                iconRight={{
                  set: "icon",
                  name: "heroicons:arrow-down-tray-solid",
                  size: "20px",
                }}
                to={waitlist}
                label="Download Report"
                rounded
                bgColor=""
                border="white"
                color="var(--neutral-300)"
                className="!font-medium"
              />
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default LandingHeader;
