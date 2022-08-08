import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutColumnLineProps = Omit<IconProps, "name">;

export const LayoutColumnLine = (props: LayoutColumnLineProps) => (
  <Icon name="layout-column-line" {...props} />
);
