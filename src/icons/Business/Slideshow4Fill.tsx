import React from "react";
import { Icon, IconProps } from "../Icon";

export type Slideshow4FillProps = Omit<IconProps, "name">;

export const Slideshow4Fill = (props: Slideshow4FillProps) => (
  <Icon name="slideshow-4-fill" {...props} />
);
