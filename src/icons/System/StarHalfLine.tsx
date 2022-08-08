import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarHalfLineProps = Omit<IconProps, "name">;

export const StarHalfLine = (props: StarHalfLineProps) => (
  <Icon name="star-half-line" {...props} />
);
