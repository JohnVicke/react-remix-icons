import React from "react";
import { Icon, IconProps } from "../Icon";

export type DirectionLineProps = Omit<IconProps, "name">;

export const DirectionLine = (props: DirectionLineProps) => (
  <Icon name="direction-line" {...props} />
);
