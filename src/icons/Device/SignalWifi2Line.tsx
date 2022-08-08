import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifi2LineProps = Omit<IconProps, "name">;

export const SignalWifi2Line = (props: SignalWifi2LineProps) => (
  <Icon name="signal-wifi-2-line" {...props} />
);
