import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutTop2FillProps = Omit<IconProps, "name">;

export const LayoutTop2Fill = (props: LayoutTop2FillProps) => (
  <Icon name="layout-top-2-fill" {...props} />
);
