import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout6LineProps = Omit<IconProps, "name">;

export const Layout6Line = (props: Layout6LineProps) => (
  <Icon name="layout-6-line" {...props} />
);
