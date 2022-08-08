import React from "react";
import { Icon, IconProps } from "../Icon";

export type GpsLineProps = Omit<IconProps, "name">;

export const GpsLine = (props: GpsLineProps) => (
  <Icon name="gps-line" {...props} />
);
