import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarHalfSFillProps = Omit<IconProps, "name">;

export const StarHalfSFill = (props: StarHalfSFillProps) => (
  <Icon name="star-half-s-fill" {...props} />
);
