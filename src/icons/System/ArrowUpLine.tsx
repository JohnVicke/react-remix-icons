import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpLineProps = Omit<IconProps, "name">;

export const ArrowUpLine = (props: ArrowUpLineProps) => (
  <Icon name="arrow-up-line" {...props} />
);
