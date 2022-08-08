import React from "react";
import { Icon, IconProps } from "../Icon";

export type ClockwiseFillProps = Omit<IconProps, "name">;

export const ClockwiseFill = (props: ClockwiseFillProps) => (
  <Icon name="clockwise-fill" {...props} />
);
