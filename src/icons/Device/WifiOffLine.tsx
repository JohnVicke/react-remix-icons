import React from "react";
import { Icon, IconProps } from "../Icon";

export type WifiOffLineProps = Omit<IconProps, "name">;

export const WifiOffLine = (props: WifiOffLineProps) => (
  <Icon name="wifi-off-line" {...props} />
);
