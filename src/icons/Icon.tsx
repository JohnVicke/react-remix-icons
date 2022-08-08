import React from "react";

export type IconProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  name: string;
  size: "xxs" | "xs" | "sm" | "1x" | "lg" | "xl" | "2x" | "3x";
};

export const Icon = ({ name, size = "1x", ...props }: IconProps) => (
  <i className={`ri-${name} ri-${size}`} {...props} />
);
