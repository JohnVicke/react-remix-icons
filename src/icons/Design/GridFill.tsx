import React from "react";
import { Icon, IconProps } from "../Icon";

export type GridFillProps = Omit<IconProps, "name">;

export const GridFill = (props: GridFillProps) => (
  <Icon name="grid-fill" {...props} />
);
