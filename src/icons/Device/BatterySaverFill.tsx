import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatterySaverFillProps = Omit<IconProps, "name">;

export const BatterySaverFill = (props: BatterySaverFillProps) => (
  <Icon name="battery-saver-fill" {...props} />
);
