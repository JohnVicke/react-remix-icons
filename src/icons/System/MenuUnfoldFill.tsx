import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuUnfoldFillProps = Omit<IconProps, "name">;

export const MenuUnfoldFill = (props: MenuUnfoldFillProps) => (
  <Icon name="menu-unfold-fill" {...props} />
);
