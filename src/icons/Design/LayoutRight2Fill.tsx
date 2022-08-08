import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutRight2FillProps = Omit<IconProps, "name">;

export const LayoutRight2Fill = (props: LayoutRight2FillProps) => (
  <Icon name="layout-right-2-fill" {...props} />
);
