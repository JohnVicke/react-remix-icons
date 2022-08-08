import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryLowFillProps = Omit<IconProps, "name">;

export const BatteryLowFill = (props: BatteryLowFillProps) => (
  <Icon name="battery-low-fill" {...props} />
);
