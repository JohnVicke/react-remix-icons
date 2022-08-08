import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutTop2LineProps = Omit<IconProps, "name">;

export const LayoutTop2Line = (props: LayoutTop2LineProps) => (
  <Icon name="layout-top-2-line" {...props} />
);
