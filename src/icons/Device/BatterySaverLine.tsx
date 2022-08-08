import React from "react";
import { Icon, IconProps } from "../Icon";

export type BatterySaverLineProps = Omit<IconProps, "name">;

export const BatterySaverLine = (props: BatterySaverLineProps) => (
  <Icon name="battery-saver-line" {...props} />
);
