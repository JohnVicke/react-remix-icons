import React from "react";
import { Icon, IconProps } from "../Icon";

export type StarSFillProps = Omit<IconProps, "name">;

export const StarSFill = (props: StarSFillProps) => (
  <Icon name="star-s-fill" {...props} />
);
