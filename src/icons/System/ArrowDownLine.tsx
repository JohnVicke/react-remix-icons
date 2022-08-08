import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDownLineProps = Omit<IconProps, "name">;

export const ArrowDownLine = (props: ArrowDownLineProps) => (
  <Icon name="arrow-down-line" {...props} />
);
