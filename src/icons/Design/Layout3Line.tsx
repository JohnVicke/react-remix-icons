import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout3LineProps = Omit<IconProps, "name">;

export const Layout3Line = (props: Layout3LineProps) => (
  <Icon name="layout-3-line" {...props} />
);
