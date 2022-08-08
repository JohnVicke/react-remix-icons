import React from "react";
import { Icon, IconProps } from "../Icon";

export type MenuLineProps = Omit<IconProps, "name">;

export const MenuLine = (props: MenuLineProps) => (
  <Icon name="menu-line" {...props} />
);
