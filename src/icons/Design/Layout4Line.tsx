import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout4LineProps = Omit<IconProps, "name">;

export const Layout4Line = (props: Layout4LineProps) => (
  <Icon name="layout-4-line" {...props} />
);
