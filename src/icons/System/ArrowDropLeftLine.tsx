import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropLeftLineProps = Omit<IconProps, "name">;

export const ArrowDropLeftLine = (props: ArrowDropLeftLineProps) => (
  <Icon name="arrow-drop-left-line" {...props} />
);
