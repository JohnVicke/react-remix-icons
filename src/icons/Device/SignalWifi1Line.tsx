import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifi1LineProps = Omit<IconProps, "name">;

export const SignalWifi1Line = (props: SignalWifi1LineProps) => (
  <Icon name="signal-wifi-1-line" {...props} />
);
