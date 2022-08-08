import React from "react";
import { Icon, IconProps } from "../Icon";

export type Menu5FillProps = Omit<IconProps, "name">;

export const Menu5Fill = (props: Menu5FillProps) => (
  <Icon name="menu-5-fill" {...props} />
);
