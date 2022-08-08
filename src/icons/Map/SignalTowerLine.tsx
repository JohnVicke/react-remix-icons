import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalTowerLineProps = Omit<IconProps, "name">;

export const SignalTowerLine = (props: SignalTowerLineProps) => (
  <Icon name="signal-tower-line" {...props} />
);
