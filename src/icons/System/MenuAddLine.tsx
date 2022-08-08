import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuAddLineProps = Omit<IconProps, "name">;

export const MenuAddLine = (props: MenuAddLineProps) => (
  <Icon name="menu-add-line" {...props} />
);
