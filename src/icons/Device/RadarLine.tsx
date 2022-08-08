import React from "react";
import { Icon, IconProps } from "../Icon";

export type RadarLineProps = Omit<IconProps, "name">;

export const RadarLine = (props: RadarLineProps) => (
  <Icon name="radar-line" {...props} />
);
