import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDownSLineProps = Omit<IconProps, "name">;

export const ArrowDownSLine = (props: ArrowDownSLineProps) => (
  <Icon name="arrow-down-s-line" {...props} />
);
