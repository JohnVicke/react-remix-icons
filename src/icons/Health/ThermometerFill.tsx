import React from "react";
import { Icon, IconProps } from "../Icon";

export type ThermometerFillProps = Omit<IconProps, "name">;

export const ThermometerFill = (props: ThermometerFillProps) => (
  <Icon name="thermometer-fill" {...props} />
);
