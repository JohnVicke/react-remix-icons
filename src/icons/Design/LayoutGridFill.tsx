import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutGridFillProps = Omit<IconProps, "name">;

export const LayoutGridFill = (props: LayoutGridFillProps) => (
  <Icon name="layout-grid-fill" {...props} />
);
