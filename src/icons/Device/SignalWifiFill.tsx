import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalWifiFillProps = Omit<IconProps, "name">;

export const SignalWifiFill = (props: SignalWifiFillProps) => (
  <Icon name="signal-wifi-fill" {...props} />
);
