import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout3FillProps = Omit<IconProps, "name">;

export const Layout3Fill = (props: Layout3FillProps) => (
  <Icon name="layout-3-fill" {...props} />
);
