import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout5LineProps = Omit<IconProps, "name">;

export const Layout5Line = (props: Layout5LineProps) => (
  <Icon name="layout-5-line" {...props} />
);
