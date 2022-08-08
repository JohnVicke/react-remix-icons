import React from "react";
import { Icon, IconProps } from "../Icon";

export type SlideshowLineProps = Omit<IconProps, "name">;

export const SlideshowLine = (props: SlideshowLineProps) => (
  <Icon name="slideshow-line" {...props} />
);
