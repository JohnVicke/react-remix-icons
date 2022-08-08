import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeWifiLineProps = Omit<IconProps, "name">;

export const HomeWifiLine = (props: HomeWifiLineProps) => (
  <Icon name="home-wifi-line" {...props} />
);
