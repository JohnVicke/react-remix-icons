import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutRight2LineProps = Omit<IconProps, "name">;

export const LayoutRight2Line = (props: LayoutRight2LineProps) => (
  <Icon name="layout-right-2-line" {...props} />
);
