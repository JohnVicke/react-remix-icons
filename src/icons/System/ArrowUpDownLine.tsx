import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpDownLineProps = Omit<IconProps, "name">;

export const ArrowUpDownLine = (props: ArrowUpDownLineProps) => (
  <Icon name="arrow-up-down-line" {...props} />
);
