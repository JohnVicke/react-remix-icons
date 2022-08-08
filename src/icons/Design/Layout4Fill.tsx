import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout4FillProps = Omit<IconProps, "name">;

export const Layout4Fill = (props: Layout4FillProps) => (
  <Icon name="layout-4-fill" {...props} />
);
