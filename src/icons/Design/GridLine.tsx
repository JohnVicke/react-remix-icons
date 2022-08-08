import React from "react";
import { Icon, IconProps } from "../Icon";

export type GridLineProps = Omit<IconProps, "name">;

export const GridLine = (props: GridLineProps) => (
  <Icon name="grid-line" {...props} />
);
