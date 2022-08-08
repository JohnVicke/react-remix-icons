import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutTopLineProps = Omit<IconProps, "name">;

export const LayoutTopLine = (props: LayoutTopLineProps) => (
  <Icon name="layout-top-line" {...props} />
);
