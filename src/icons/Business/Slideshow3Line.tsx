import React from "react";
import { Icon, IconProps } from "../Icon";

export type Slideshow3LineProps = Omit<IconProps, "name">;

export const Slideshow3Line = (props: Slideshow3LineProps) => (
  <Icon name="slideshow-3-line" {...props} />
);
