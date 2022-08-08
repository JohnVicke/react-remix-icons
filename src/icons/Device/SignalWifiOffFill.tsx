import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifiOffFillProps = Omit<IconProps, "name">;

export const SignalWifiOffFill = (props: SignalWifiOffFillProps) => (
  <Icon name="signal-wifi-off-fill" {...props} />
);
