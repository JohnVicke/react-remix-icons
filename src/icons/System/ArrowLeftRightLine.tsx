import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowLeftRightLineProps = Omit<IconProps, "name">;

export const ArrowLeftRightLine = (props: ArrowLeftRightLineProps) => (
  <Icon name="arrow-left-right-line" {...props} />
);
