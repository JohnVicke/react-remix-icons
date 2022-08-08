import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropUpFillProps = Omit<IconProps, "name">;

export const ArrowDropUpFill = (props: ArrowDropUpFillProps) => (
  <Icon name="arrow-drop-up-fill" {...props} />
);
