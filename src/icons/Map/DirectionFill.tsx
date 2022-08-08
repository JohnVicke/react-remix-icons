import React from "react";
import { Icon, IconProps } from "../Icon";

export type DirectionFillProps = Omit<IconProps, "name">;

export const DirectionFill = (props: DirectionFillProps) => (
  <Icon name="direction-fill" {...props} />
);
