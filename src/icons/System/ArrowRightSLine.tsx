import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightSLineProps = Omit<IconProps, "name">;

export const ArrowRightSLine = (props: ArrowRightSLineProps) => (
  <Icon name="arrow-right-s-line" {...props} />
);
