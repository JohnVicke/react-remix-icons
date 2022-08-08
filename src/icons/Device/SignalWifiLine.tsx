import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifiLineProps = Omit<IconProps, "name">;

export const SignalWifiLine = (props: SignalWifiLineProps) => (
  <Icon name="signal-wifi-line" {...props} />
);
