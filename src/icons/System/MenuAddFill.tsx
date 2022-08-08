import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuAddFillProps = Omit<IconProps, "name">;

export const MenuAddFill = (props: MenuAddFillProps) => (
  <Icon name="menu-add-fill" {...props} />
);
