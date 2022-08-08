import React from "react";
import { Icon, IconProps } from "../Icon";

export type WifiLineProps = Omit<IconProps, "name">;

export const WifiLine = (props: WifiLineProps) => (
  <Icon name="wifi-line" {...props} />
);
