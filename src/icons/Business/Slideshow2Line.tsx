import React from "react";
import { Icon, IconProps } from "../Icon";

export type Slideshow2LineProps = Omit<IconProps, "name">;

export const Slideshow2Line = (props: Slideshow2LineProps) => (
  <Icon name="slideshow-2-line" {...props} />
);
