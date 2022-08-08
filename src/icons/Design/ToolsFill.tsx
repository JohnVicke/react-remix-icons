import React from "react";
import { Icon, IconProps } from "../Icon";

export type ToolsFillProps = Omit<IconProps, "name">;

export const ToolsFill = (props: ToolsFillProps) => (
  <Icon name="tools-fill" {...props} />
);
