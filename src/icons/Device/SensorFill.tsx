import React from "react";
import { Icon, IconProps } from "../Icon";

export type SensorFillProps = Omit<IconProps, "name">;

export const SensorFill = (props: SensorFillProps) => (
  <Icon name="sensor-fill" {...props} />
);
