import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutTopFillProps = Omit<IconProps, "name">;

export const LayoutTopFill = (props: LayoutTopFillProps) => (
  <Icon name="layout-top-fill" {...props} />
);
