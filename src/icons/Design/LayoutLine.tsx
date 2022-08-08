import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutLineProps = Omit<IconProps, "name">;

export const LayoutLine = (props: LayoutLineProps) => (
  <Icon name="layout-line" {...props} />
);
