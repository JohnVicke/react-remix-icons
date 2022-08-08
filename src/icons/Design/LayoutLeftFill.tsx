import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutLeftFillProps = Omit<IconProps, "name">;

export const LayoutLeftFill = (props: LayoutLeftFillProps) => (
  <Icon name="layout-left-fill" {...props} />
);
