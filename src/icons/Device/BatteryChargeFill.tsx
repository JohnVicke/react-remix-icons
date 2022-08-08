import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryChargeFillProps = Omit<IconProps, "name">;

export const BatteryChargeFill = (props: BatteryChargeFillProps) => (
  <Icon name="battery-charge-fill" {...props} />
);
