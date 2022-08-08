import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldStarLineProps = Omit<IconProps, "name">;

export const ShieldStarLine = (props: ShieldStarLineProps) => (
  <Icon name="shield-star-line" {...props} />
);
