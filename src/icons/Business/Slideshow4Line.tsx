import React from "react";
import { Icon, IconProps } from "../Icon";

export type Slideshow4LineProps = Omit<IconProps, "name">;

export const Slideshow4Line = (props: Slideshow4LineProps) => (
  <Icon name="slideshow-4-line" {...props} />
);
