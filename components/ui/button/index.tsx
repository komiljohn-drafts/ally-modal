"use client";

import "./style.css";

import React, { ReactNode } from "react";
import { Button, ButtonProps } from "react-aria-components";

import { SpinnerSvg } from "@/public/icons";

export default function AriaButton({
  className,
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  variant = "primary",
  children,
  ...props
}: Props) {
  return (
    <Button
      data-variant={variant}
      isDisabled={isDisabled || isLoading}
      className={`react-aria-Button ${className}`}
      {...props}
    >
      {isLoading && <SpinnerSvg className="animate-spin size-[22px]" />}
      {variant !== "ghost" && leftIcon}
      <>{children}</>
      {variant !== "ghost" && rightIcon}
    </Button>
  );
}

interface Props extends ButtonProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariants;
}

export type ButtonVariants = "primary" | "outlined" | "ghost" | "danger";
