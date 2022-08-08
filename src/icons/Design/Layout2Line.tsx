import React from "react";
import { Icon, IconProps } from "../Icon";

export type Layout2LineProps = Omit<IconProps, "name">;

export const Layout2Line = (props: Layout2LineProps) => (
  <Icon name="layout-2-line" {...props} />
);
