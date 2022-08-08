import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutColumnFillProps = Omit<IconProps, "name">;

export const LayoutColumnFill = (props: LayoutColumnFillProps) => (
  <Icon name="layout-column-fill" {...props} />
);
