import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu2LineProps = Omit<IconProps, "name">;

export const Menu2Line = (props: Menu2LineProps) => (
  <Icon name="menu-2-line" {...props} />
);
