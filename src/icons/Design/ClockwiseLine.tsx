import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClockwiseLineProps = Omit<IconProps, "name">;

export const ClockwiseLine = (props: ClockwiseLineProps) => (
  <Icon name="clockwise-line" {...props} />
);
