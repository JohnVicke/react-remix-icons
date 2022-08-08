import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpFillProps = Omit<IconProps, "name">;

export const ArrowUpFill = (props: ArrowUpFillProps) => (
  <Icon name="arrow-up-fill" {...props} />
);
