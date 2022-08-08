import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu2FillProps = Omit<IconProps, "name">;

export const Menu2Fill = (props: Menu2FillProps) => (
  <Icon name="menu-2-fill" {...props} />
);
