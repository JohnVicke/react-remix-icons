import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutLeft2FillProps = Omit<IconProps, "name">;

export const LayoutLeft2Fill = (props: LayoutLeft2FillProps) => (
  <Icon name="layout-left-2-fill" {...props} />
);
