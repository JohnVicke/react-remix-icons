import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu5LineProps = Omit<IconProps, "name">;

export const Menu5Line = (props: Menu5LineProps) => (
  <Icon name="menu-5-line" {...props} />
);
