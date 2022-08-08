import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout2FillProps = Omit<IconProps, "name">;

export const Layout2Fill = (props: Layout2FillProps) => (
  <Icon name="layout-2-fill" {...props} />
);
