import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifiErrorFillProps = Omit<IconProps, "name">;

export const SignalWifiErrorFill = (props: SignalWifiErrorFillProps) => (
  <Icon name="signal-wifi-error-fill" {...props} />
);
