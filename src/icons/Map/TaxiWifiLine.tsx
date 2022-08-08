import React from "react";
import { Icon, IconProps } from "../Icon";

export type TaxiWifiLineProps = Omit<IconProps, "name">;

export const TaxiWifiLine = (props: TaxiWifiLineProps) => (
  <Icon name="taxi-wifi-line" {...props} />
);
