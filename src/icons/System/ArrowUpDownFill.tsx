import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpDownFillProps = Omit<IconProps, "name">;

export const ArrowUpDownFill = (props: ArrowUpDownFillProps) => (
  <Icon name="arrow-up-down-fill" {...props} />
);
