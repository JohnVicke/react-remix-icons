import React from "react";
import { Icon, IconProps } from "../Icon";

export type BusWifiLineProps = Omit<IconProps, "name">;

export const BusWifiLine = (props: BusWifiLineProps) => (
  <Icon name="bus-wifi-line" {...props} />
);
