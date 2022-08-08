import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShieldStarFillProps = Omit<IconProps, "name">;

export const ShieldStarFill = (props: ShieldStarFillProps) => (
  <Icon name="shield-star-fill" {...props} />
);
