import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu3FillProps = Omit<IconProps, "name">;

export const Menu3Fill = (props: Menu3FillProps) => (
  <Icon name="menu-3-fill" {...props} />
);
