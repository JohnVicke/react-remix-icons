import React from "react";
import { Icon, IconProps } from "../Icon";

export type SubwayWifiLineProps = Omit<IconProps, "name">;

export const SubwayWifiLine = (props: SubwayWifiLineProps) => (
  <Icon name="subway-wifi-line" {...props} />
);
