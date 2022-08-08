import React from "react";
import { Icon, IconProps } from "../Icon";

export type GobletFillProps = Omit<IconProps, "name">;

export const GobletFill = (props: GobletFillProps) => (
  <Icon name="goblet-fill" {...props} />
);
