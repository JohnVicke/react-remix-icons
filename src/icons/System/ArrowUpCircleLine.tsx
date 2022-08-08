import React from "react";
import { Icon, IconProps } from "../Icon";

export type ArrowUpCircleLineProps = Omit<IconProps, "name">;

export const ArrowUpCircleLine = (props: ArrowUpCircleLineProps) => (
  <Icon name="arrow-up-circle-line" {...props} />
);
