import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropRightLineProps = Omit<IconProps, "name">;

export const ArrowDropRightLine = (props: ArrowDropRightLineProps) => (
  <Icon name="arrow-drop-right-line" {...props} />
);
