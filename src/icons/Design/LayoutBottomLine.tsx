import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutBottomLineProps = Omit<IconProps, "name">;

export const LayoutBottomLine = (props: LayoutBottomLineProps) => (
  <Icon name="layout-bottom-line" {...props} />
);
