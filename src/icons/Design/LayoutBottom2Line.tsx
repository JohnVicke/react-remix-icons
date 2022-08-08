import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutBottom2LineProps = Omit<IconProps, "name">;

export const LayoutBottom2Line = (props: LayoutBottom2LineProps) => (
  <Icon name="layout-bottom-2-line" {...props} />
);
