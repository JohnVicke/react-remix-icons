import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutLeft2LineProps = Omit<IconProps, "name">;

export const LayoutLeft2Line = (props: LayoutLeft2LineProps) => (
  <Icon name="layout-left-2-line" {...props} />
);
