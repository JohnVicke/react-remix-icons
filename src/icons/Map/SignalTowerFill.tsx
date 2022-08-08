import React from "react";
import { Icon, IconProps } from "../Icon";

export type SignalTowerFillProps = Omit<IconProps, "name">;

export const SignalTowerFill = (props: SignalTowerFillProps) => (
  <Icon name="signal-tower-fill" {...props} />
);
