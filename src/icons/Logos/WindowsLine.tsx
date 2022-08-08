import React from "react";
import { Icon, IconProps } from "../Icon";

export type WindowsLineProps = Omit<IconProps, "name">;

export const WindowsLine = (props: WindowsLineProps) => (
  <Icon name="windows-line" {...props} />
);
