import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarricadeFillProps = Omit<IconProps, "name">;

export const BarricadeFill = (props: BarricadeFillProps) => (
  <Icon name="barricade-fill" {...props} />
);
