import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutBottomFillProps = Omit<IconProps, "name">;

export const LayoutBottomFill = (props: LayoutBottomFillProps) => (
  <Icon name="layout-bottom-fill" {...props} />
);
