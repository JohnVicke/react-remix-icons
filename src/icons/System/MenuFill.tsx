import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuFillProps = Omit<IconProps, "name">;

export const MenuFill = (props: MenuFillProps) => (
  <Icon name="menu-fill" {...props} />
);
