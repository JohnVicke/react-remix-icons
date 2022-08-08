import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarricadeLineProps = Omit<IconProps, "name">;

export const BarricadeLine = (props: BarricadeLineProps) => (
  <Icon name="barricade-line" {...props} />
);
