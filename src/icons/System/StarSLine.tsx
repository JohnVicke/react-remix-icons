import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarSLineProps = Omit<IconProps, "name">;

export const StarSLine = (props: StarSLineProps) => (
  <Icon name="star-s-line" {...props} />
);
