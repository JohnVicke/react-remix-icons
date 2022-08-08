import React from "react";
import { Icon, IconProps } from "../Icon";

export type SensorLineProps = Omit<IconProps, "name">;

export const SensorLine = (props: SensorLineProps) => (
  <Icon name="sensor-line" {...props} />
);
