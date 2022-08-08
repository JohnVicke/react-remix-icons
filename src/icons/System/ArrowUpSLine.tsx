import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpSLineProps = Omit<IconProps, "name">;

export const ArrowUpSLine = (props: ArrowUpSLineProps) => (
  <Icon name="arrow-up-s-line" {...props} />
);
