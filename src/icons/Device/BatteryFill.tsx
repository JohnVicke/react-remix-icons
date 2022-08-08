import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryFillProps = Omit<IconProps, "name">;

export const BatteryFill = (props: BatteryFillProps) => (
  <Icon name="battery-fill" {...props} />
);
