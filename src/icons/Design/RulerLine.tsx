import React from "react";
import { Icon, IconProps } from "../Icon";

export type RulerLineProps = Omit<IconProps, "name">;

export const RulerLine = (props: RulerLineProps) => (
  <Icon name="ruler-line" {...props} />
);
