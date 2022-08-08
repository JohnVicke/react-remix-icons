import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuFoldLineProps = Omit<IconProps, "name">;

export const MenuFoldLine = (props: MenuFoldLineProps) => (
  <Icon name="menu-fold-line" {...props} />
);
