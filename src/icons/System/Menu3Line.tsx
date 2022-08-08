import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu3LineProps = Omit<IconProps, "name">;

export const Menu3Line = (props: Menu3LineProps) => (
  <Icon name="menu-3-line" {...props} />
);
