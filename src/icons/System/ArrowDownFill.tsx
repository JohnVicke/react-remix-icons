import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDownFillProps = Omit<IconProps, "name">;

export const ArrowDownFill = (props: ArrowDownFillProps) => (
  <Icon name="arrow-down-fill" {...props} />
);
