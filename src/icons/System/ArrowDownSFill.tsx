import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDownSFillProps = Omit<IconProps, "name">;

export const ArrowDownSFill = (props: ArrowDownSFillProps) => (
  <Icon name="arrow-down-s-fill" {...props} />
);
