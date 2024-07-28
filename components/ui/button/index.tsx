"use client";

import React, { ReactNode } from "react";
import { Button, ButtonProps } from "react-aria-components";
import { SpinnerSvg } from "@/public/icons";

import "./style.css";

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
      onPress={() => console.log("Hello world!")}
      className={`button ${className}`}
      {...props}
    >
      {isLoading && <SpinnerSvg className="animate-spin size-[22px]" />}
      {leftIcon}
      <>{children}</>
      {rightIcon}
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

export type ButtonVariants = "primary" | "outlined" | "tertiary" | "danger";
