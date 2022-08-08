import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowDownCircleLineProps = Omit<IconProps, "name">;

export const ArrowDownCircleLine = (props: ArrowDownCircleLineProps) => (
  <Icon name="arrow-down-circle-line" {...props} />
);
