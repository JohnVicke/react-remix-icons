import React from "react";
import { Icon, IconProps } from "../Icon";

export type RouterFillProps = Omit<IconProps, "name">;

export const RouterFill = (props: RouterFillProps) => (
  <Icon name="router-fill" {...props} />
);
