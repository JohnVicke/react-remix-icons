import React from "react";
import { Icon, IconProps } from "../Icon";

export type SlideshowFillProps = Omit<IconProps, "name">;

export const SlideshowFill = (props: SlideshowFillProps) => (
  <Icon name="slideshow-fill" {...props} />
);
