import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropDownFillProps = Omit<IconProps, "name">;

export const ArrowDropDownFill = (props: ArrowDropDownFillProps) => (
  <Icon name="arrow-drop-down-fill" {...props} />
);
