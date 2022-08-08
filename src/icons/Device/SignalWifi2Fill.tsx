import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifi2FillProps = Omit<IconProps, "name">;

export const SignalWifi2Fill = (props: SignalWifi2FillProps) => (
  <Icon name="signal-wifi-2-fill" {...props} />
);
