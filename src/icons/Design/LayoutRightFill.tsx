import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutRightFillProps = Omit<IconProps, "name">;

export const LayoutRightFill = (props: LayoutRightFillProps) => (
  <Icon name="layout-right-fill" {...props} />
);
