import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutLeftLineProps = Omit<IconProps, "name">;

export const LayoutLeftLine = (props: LayoutLeftLineProps) => (
  <Icon name="layout-left-line" {...props} />
);
