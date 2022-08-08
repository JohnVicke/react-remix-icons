import React from "react";
import { Icon, IconProps } from "../Icon";

export type NavigationFillProps = Omit<IconProps, "name">;

export const NavigationFill = (props: NavigationFillProps) => (
  <Icon name="navigation-fill" {...props} />
);
