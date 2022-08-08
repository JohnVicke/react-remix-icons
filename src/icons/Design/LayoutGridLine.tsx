import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutGridLineProps = Omit<IconProps, "name">;

export const LayoutGridLine = (props: LayoutGridLineProps) => (
  <Icon name="layout-grid-line" {...props} />
);
