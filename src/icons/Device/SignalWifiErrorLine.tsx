import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifiErrorLineProps = Omit<IconProps, "name">;

export const SignalWifiErrorLine = (props: SignalWifiErrorLineProps) => (
  <Icon name="signal-wifi-error-line" {...props} />
);
