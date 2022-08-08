import React from "react";
import { Icon, IconProps } from "../Icon";

export type Slideshow3FillProps = Omit<IconProps, "name">;

export const Slideshow3Fill = (props: Slideshow3FillProps) => (
  <Icon name="slideshow-3-fill" {...props} />
);
