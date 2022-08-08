import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropRightFillProps = Omit<IconProps, "name">;

export const ArrowDropRightFill = (props: ArrowDropRightFillProps) => (
  <Icon name="arrow-drop-right-fill" {...props} />
);
