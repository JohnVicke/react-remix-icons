import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarHalfFillProps = Omit<IconProps, "name">;

export const StarHalfFill = (props: StarHalfFillProps) => (
  <Icon name="star-half-fill" {...props} />
);
