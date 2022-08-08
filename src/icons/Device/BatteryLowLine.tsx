import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryLowLineProps = Omit<IconProps, "name">;

export const BatteryLowLine = (props: BatteryLowLineProps) => (
  <Icon name="battery-low-line" {...props} />
);
