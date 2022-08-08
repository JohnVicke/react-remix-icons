import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryLineProps = Omit<IconProps, "name">;

export const BatteryLine = (props: BatteryLineProps) => (
  <Icon name="battery-line" {...props} />
);
