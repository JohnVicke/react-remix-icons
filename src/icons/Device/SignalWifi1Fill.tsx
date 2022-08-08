import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifi1FillProps = Omit<IconProps, "name">;

export const SignalWifi1Fill = (props: SignalWifi1FillProps) => (
  <Icon name="signal-wifi-1-fill" {...props} />
);
