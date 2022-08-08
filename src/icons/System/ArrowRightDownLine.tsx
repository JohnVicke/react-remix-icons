import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightDownLineProps = Omit<IconProps, "name">;

export const ArrowRightDownLine = (props: ArrowRightDownLineProps) => (
  <Icon name="arrow-right-down-line" {...props} />
);
