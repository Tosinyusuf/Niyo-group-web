import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  HTMLInputElement,
  Dispatch,
  SetStateAction,
  FC,
  HTMLAttributes,
  SVGAttributes,
  ClassAttributes,
} from "react";

export interface TextProps<T> {
  value?: string;
  variant: T;
  weight?: number | string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => any;
  SrcLeft?: React.FC<React.SVGProps<SVGSVGElement> | any>;
  srcLeftClasses?: string;
  SrcRight?: React.FC<React.SVGProps<SVGSVGElement> | any>;
  srcRightClasses?: string;
  disabled?: boolean;
  disabledColor?: string;
  loading?: boolean;
  bgColor?: string;
  size?: string;
  color?: string;
  border?: string;
  className?: string;
  iconLeft?: IconProps;
  iconRight?: IconProps;
  children?: React.ReactNode;
  to?: string;
  disabledTooltip?: string;
  /**
   * Boolean or Number value indicating fixed size of 36px rounded corners
   * or custom size
   */
  rounded?: boolean | number;
}

export interface IconProps extends SVGAttributes<SVGElement> {
    set: "icon" | "svg" | "vuesax";
    name?: string;
    icon?: any;
    iconClass?: string;
    color?: string;
    variant?: "Linear" | "Outline" | "TwoTone" | "Bulk" | "Broken" | "Bold";
    size?: string;
    mode?: any
  }