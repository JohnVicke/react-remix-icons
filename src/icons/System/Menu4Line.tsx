import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu4LineProps = Omit<IconProps, "name">;

export const Menu4Line = (props: Menu4LineProps) => (
  <Icon name="menu-4-line" {...props} />
);
