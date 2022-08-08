import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifiOffLineProps = Omit<IconProps, "name">;

export const SignalWifiOffLine = (props: SignalWifiOffLineProps) => (
  <Icon name="signal-wifi-off-line" {...props} />
);
