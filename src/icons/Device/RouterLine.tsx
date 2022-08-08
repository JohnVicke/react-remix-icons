import React from "react";
import { Icon, IconProps } from "../Icon";

export type RouterLineProps = Omit<IconProps, "name">;

export const RouterLine = (props: RouterLineProps) => (
  <Icon name="router-line" {...props} />
);
