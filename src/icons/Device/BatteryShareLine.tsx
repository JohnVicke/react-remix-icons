import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryShareLineProps = Omit<IconProps, "name">;

export const BatteryShareLine = (props: BatteryShareLineProps) => (
  <Icon name="battery-share-line" {...props} />
);
