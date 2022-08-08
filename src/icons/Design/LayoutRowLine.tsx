import React from "react";
import { Icon, IconProps } from "../Icon";

export type LayoutRowLineProps = Omit<IconProps, "name">;

export const LayoutRowLine = (props: LayoutRowLineProps) => (
  <Icon name="layout-row-line" {...props} />
);
