import React from "react";
import { Icon, IconProps } from "../Icon";

export type WirelessChargingFillProps = Omit<IconProps, "name">;

export const WirelessChargingFill = (props: WirelessChargingFillProps) => (
  <Icon name="wireless-charging-fill" {...props} />
);
