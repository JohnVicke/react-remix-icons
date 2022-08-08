import React from "react";
import { Icon, IconProps } from "../Icon";

export type GobletLineProps = Omit<IconProps, "name">;

export const GobletLine = (props: GobletLineProps) => (
  <Icon name="goblet-line" {...props} />
);
