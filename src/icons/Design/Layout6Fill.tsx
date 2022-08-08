import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout6FillProps = Omit<IconProps, "name">;

export const Layout6Fill = (props: Layout6FillProps) => (
  <Icon name="layout-6-fill" {...props} />
);
