import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryChargeLineProps = Omit<IconProps, "name">;

export const BatteryChargeLine = (props: BatteryChargeLineProps) => (
  <Icon name="battery-charge-line" {...props} />
);
