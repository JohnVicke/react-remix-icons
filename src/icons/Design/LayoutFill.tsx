import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutFillProps = Omit<IconProps, "name">;

export const LayoutFill = (props: LayoutFillProps) => (
  <Icon name="layout-fill" {...props} />
);
