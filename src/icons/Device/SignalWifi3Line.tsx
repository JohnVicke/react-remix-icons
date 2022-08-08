import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifi3LineProps = Omit<IconProps, "name">;

export const SignalWifi3Line = (props: SignalWifi3LineProps) => (
  <Icon name="signal-wifi-3-line" {...props} />
);
