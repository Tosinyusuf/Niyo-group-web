import PropTypes from "prop-types";
import React from "react";
import { TextProps } from "@/types";

const Text = ({
  value,
  variant: textVariant,
  weight,
  color = "neutral-500",
  className,
  children,
  ...props
}: TextProps<validElements>) => {



  const textStyle = `${variants[textVariant]} ${className}`;

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
    font-stacion
    tracking-[-3px]
    `,
  h1: `
    md:text-[40px]
    text-[36px]
    md:leading-[48px]
    leading-[44px]
    font-normal 
    font-stacion
    tracking-[-2%]
    `,

  h2: `
    md:text-[36px]
    text-[32px]
    md:leading-[44px]
    leading-[40px]
    font-normal 
    font-stacion
    tracking-[-2%]
    `,

  h3: `
    md:text-[32px]
    text-[28px]
    md:leading-[40px]
    leading-[36px]
    font-normal 
    font-stacion
    tracking-[-2%]
    `,
  h4: `
    md:text-[28px]
    text-[24px]
    md:leading-[36px]
    leading-[32px]
    font-normal 
    font-stacion
    md:tracking-[-2%]
    `,
  h5: `
    md:text-[24px]
    text-[20px]
    md:leading-[32px]
    leading-[28px]
    font-normal 
    font-stacion
    md:tracking-[-2%]
    `,
  h6: `
    md:text-[20px]
    text-[18px]
    md:leading-[28px]
    leading-[24px]
    font-normal
    font-stacion
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
