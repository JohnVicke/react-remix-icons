import React from "react";
import { Icon, IconProps } from "../Icon";

export type WirelessChargingLineProps = Omit<IconProps, "name">;

export const WirelessChargingLine = (props: WirelessChargingLineProps) => (
  <Icon name="wireless-charging-line" {...props} />
);
