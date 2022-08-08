import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropDownLineProps = Omit<IconProps, "name">;

export const ArrowDropDownLine = (props: ArrowDropDownLineProps) => (
  <Icon name="arrow-drop-down-line" {...props} />
);
