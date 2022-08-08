import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutBottom2FillProps = Omit<IconProps, "name">;

export const LayoutBottom2Fill = (props: LayoutBottom2FillProps) => (
  <Icon name="layout-bottom-2-fill" {...props} />
);
