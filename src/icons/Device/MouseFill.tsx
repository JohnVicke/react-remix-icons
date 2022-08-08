import React from "react";
import { Icon, IconProps } from "../Icon";

export type MouseFillProps = Omit<IconProps, "name">;

export const MouseFill = (props: MouseFillProps) => (
  <Icon name="mouse-fill" {...props} />
);
