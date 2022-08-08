import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutRowFillProps = Omit<IconProps, "name">;

export const LayoutRowFill = (props: LayoutRowFillProps) => (
  <Icon name="layout-row-fill" {...props} />
);
