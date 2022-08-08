import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarHalfSLineProps = Omit<IconProps, "name">;

export const StarHalfSLine = (props: StarHalfSLineProps) => (
  <Icon name="star-half-s-line" {...props} />
);
