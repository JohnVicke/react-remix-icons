import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDropUpLineProps = Omit<IconProps, "name">;

export const ArrowDropUpLine = (props: ArrowDropUpLineProps) => (
  <Icon name="arrow-drop-up-line" {...props} />
);
