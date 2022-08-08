import React from "react";
import { Icon, IconProps } from "../Icon";

export type WifiOffFillProps = Omit<IconProps, "name">;

export const WifiOffFill = (props: WifiOffFillProps) => (
  <Icon name="wifi-off-fill" {...props} />
);
