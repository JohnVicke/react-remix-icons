import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu4FillProps = Omit<IconProps, "name">;

export const Menu4Fill = (props: Menu4FillProps) => (
  <Icon name="menu-4-fill" {...props} />
);
