import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropLeftFillProps = Omit<IconProps, "name">;

export const ArrowDropLeftFill = (props: ArrowDropLeftFillProps) => (
  <Icon name="arrow-drop-left-fill" {...props} />
);
