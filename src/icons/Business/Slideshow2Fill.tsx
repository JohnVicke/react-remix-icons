import React from "react";
import { Icon, IconProps } from "../Icon";

export type Slideshow2FillProps = Omit<IconProps, "name">;

export const Slideshow2Fill = (props: Slideshow2FillProps) => (
  <Icon name="slideshow-2-fill" {...props} />
);
