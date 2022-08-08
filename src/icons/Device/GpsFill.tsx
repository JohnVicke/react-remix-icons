import React from "react";
import { Icon, IconProps } from "../Icon";

export type GpsFillProps = Omit<IconProps, "name">;

export const GpsFill = (props: GpsFillProps) => (
  <Icon name="gps-fill" {...props} />
);
