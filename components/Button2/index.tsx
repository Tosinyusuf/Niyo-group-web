"use client";

import React from "react";
import { ButtonProps } from "@/types";
import "./style.css";
import Link from "next/link";
import { Icon } from "..";

const Tooltip: React.FC<{ message: string }> = ({ message }) => (
  <div className="relative flex justify-center items-center">
    <div className="absolute z-10 bg-black/60 text-center text-white text-xs rounded py-1 px-4 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {message}
      <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-x-8 border-t-8 border-t-black/60 border-x-transparent" />
    </div>
  </div>
);

const Button2: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  disabledColor = "var(--primary-300)",
  bgColor,
  size,
  color,
  loading = false,
  border,
  iconLeft,
  iconRight,
  className,
  rounded,
  children,
  disabledTooltip,
  ...props
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: !disabled ? bgColor : disabledColor,
    border: border && `1px solid ${border}`,
    borderRadius: rounded
      ? typeof rounded === "number"
        ? `${rounded}px`
        : "36px"
      : undefined,
  };

  const ButtonLinkWrapper = Link;
  const wrapperClass = `${className} ${
    loading ? "!cursor-wait opacity-70" : ""
  } ${disabled ? "cursor-not-allowed" : ""}`;
  const ButtonContent = () => (
    <button
      type="button"
      style={buttonStyle}
      className={wrapperClass}
      onClick={onClick}
      disabled={loading || disabled}
      {...props}
    >
      {children || (
        <>
          {iconLeft && <Icon color={color} {...iconLeft} />}
          <span style={{ color }}>{label}</span>
          {iconRight && <Icon color={color} {...iconRight} />}
        </>
      )}
    </button>
  );

  return (
    <div className={`btn ${size} relative group`}>
      {disabled && disabledTooltip && <Tooltip message={disabledTooltip} />}
      {props.to && !disabled ? (
        <ButtonLinkWrapper className={`btn ${size}`} href={props.to}>
          <ButtonContent />
        </ButtonLinkWrapper>
      ) : (
        <ButtonContent />
      )}
    </div>
  );
};

export default Button2;
