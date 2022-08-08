import React from "react";
import { Icon, IconProps } from "../Icon";

export type WindowLineProps = Omit<IconProps, "name">;

export const WindowLine = (props: WindowLineProps) => (
  <Icon name="window-line" {...props} />
);
