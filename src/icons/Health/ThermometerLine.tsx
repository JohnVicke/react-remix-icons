import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThermometerLineProps = Omit<IconProps, "name">;

export const ThermometerLine = (props: ThermometerLineProps) => (
  <Icon name="thermometer-line" {...props} />
);
