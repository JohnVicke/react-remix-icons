import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutRightLineProps = Omit<IconProps, "name">;

export const LayoutRightLine = (props: LayoutRightLineProps) => (
  <Icon name="layout-right-line" {...props} />
);
