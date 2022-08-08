import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatteryShareFillProps = Omit<IconProps, "name">;

export const BatteryShareFill = (props: BatteryShareFillProps) => (
  <Icon name="battery-share-fill" {...props} />
);
