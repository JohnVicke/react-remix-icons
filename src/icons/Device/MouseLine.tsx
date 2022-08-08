import React from "react";
import { Icon, IconProps } from "../Icon";

export type MouseLineProps = Omit<IconProps, "name">;

export const MouseLine = (props: MouseLineProps) => (
  <Icon name="mouse-line" {...props} />
);
