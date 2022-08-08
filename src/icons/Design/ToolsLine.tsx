import React from "react";
import { Icon, IconProps } from "../Icon";

export type ToolsLineProps = Omit<IconProps, "name">;

export const ToolsLine = (props: ToolsLineProps) => (
  <Icon name="tools-line" {...props} />
);
