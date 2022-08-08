import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout5FillProps = Omit<IconProps, "name">;

export const Layout5Fill = (props: Layout5FillProps) => (
  <Icon name="layout-5-fill" {...props} />
);
