import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuFoldFillProps = Omit<IconProps, "name">;

export const MenuFoldFill = (props: MenuFoldFillProps) => (
  <Icon name="menu-fold-fill" {...props} />
);
