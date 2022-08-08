import React from "react";
import { Icon, IconProps } from "../Icon";

export type WindowsFillProps = Omit<IconProps, "name">;

export const WindowsFill = (props: WindowsFillProps) => (
  <Icon name="windows-fill" {...props} />
);
