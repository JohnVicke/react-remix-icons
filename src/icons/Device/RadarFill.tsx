import React from "react";
import { Icon, IconProps } from "../Icon";

export type RadarFillProps = Omit<IconProps, "name">;

export const RadarFill = (props: RadarFillProps) => (
  <Icon name="radar-fill" {...props} />
);
