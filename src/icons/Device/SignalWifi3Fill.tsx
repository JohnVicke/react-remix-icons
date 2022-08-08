import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifi3FillProps = Omit<IconProps, "name">;

export const SignalWifi3Fill = (props: SignalWifi3FillProps) => (
  <Icon name="signal-wifi-3-fill" {...props} />
);
