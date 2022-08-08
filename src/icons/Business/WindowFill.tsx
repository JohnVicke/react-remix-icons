import React from "react";
import { Icon, IconProps } from "../Icon";

export type WindowFillProps = Omit<IconProps, "name">;

export const WindowFill = (props: WindowFillProps) => (
  <Icon name="window-fill" {...props} />
);
