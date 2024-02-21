import PropTypes from "prop-types";
import React from "react";
import { TextProps } from "@/types";

const Text = ({
  value,
  variant: textVariant,
  weight,
  color = "generic-white",
  className,
  children,
  center,
  ...props
}: TextProps<validElements>) => {



  const textStyle = `${variants[textVariant]} ${className} ${center && "!text-center"}`;

  const dynamicStyle = {
    color: `var(--${color})`,
    fontWeight: weight,
  };
  return (
    <p style={dynamicStyle} className={textStyle} {...props}>
      {value || children}
    </p>
  );
};

const variants = {
  h1Large: `
    md:text-[64px]
    text-[40px]
    md:leading-[48px]
    leading-[72px]
    font-normal 
    font-figtree
    tracking-[-3px]
    `,
  h1: `
    md:text-[76px]
    text-[32px]
    md:leading-[56px]
    leading-[44px]
    font-bold 
    font-figtree
    md:tracking-[-1.56px]
    tracking-[0.64px]
    `,

  h2: `
    md:text-[56px]
    text-[32px]
    md:leading-[61px]
    leading-[50px]
    font-figtree
    md:tracking-[-1.68px]
    tracking-[-0.96px]
    `,

  h3: `
    md:text-[32px]
    text-[24px]
    md:leading-[40px]
    leading-[36px]
    font-normal 
    font-figtree
    tracking-[-2%]
    `,
  h4: `
    md:text-[28px]
    text-[24px]
    md:leading-[36px]
    leading-[32px]
    font-normal 
    font-figtree
    md:tracking-[-2%]
    `,
  h5: `
    md:text-[24px]
    text-[20px]
    md:leading-[32px]
    leading-[28px]
    font-normal 
    font-figtree
    md:tracking-[-2%]
    `,
  h6: `
    md:text-[20px]
    text-[18px]
    md:leading-[28px]
    leading-[24px]
    font-normal
    font-figtree
    md:tracking-[-2%]
    `,
  p18: `
    text-[18px]
    leading-[28px]
    font-semibold 
    `,
  p16: `

    text-[16px]
    leading-[24px]
    `,
  p14: `
    text-[14px]
    leading-[20px]
    `,
  p12: `
    text-[12px]
    leading-[20px]
    `,
  p12bold: `
    text-[12px]
    leading-[20px]
    font-medium
    `,
};
const validElements = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p12",
  "p12bold",
  "p14",
  "p16",
  "p18",
  "h1Large"
];
type validElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p12"
  | "p12bold"
  | "p14"
  | "p16"
  | "p18"
  | "h1Large";

Text.propTypes = {
  value: PropTypes.string,
  variant: PropTypes.oneOf(validElements).isRequired,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  className: PropTypes.string,
};
export default Text;
