import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuUnfoldLineProps = Omit<IconProps, "name">;

export const MenuUnfoldLine = (props: MenuUnfoldLineProps) => (
  <Icon name="menu-unfold-line" {...props} />
);
