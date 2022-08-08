import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowRightLineProps = Omit<IconProps, "name">;

export const ArrowRightLine = (props: ArrowRightLineProps) => (
  <Icon name="arrow-right-line" {...props} />
);
