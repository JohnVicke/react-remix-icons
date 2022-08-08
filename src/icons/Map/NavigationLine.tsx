import React from "react";
import { Icon, IconProps } from "../Icon";

export type NavigationLineProps = Omit<IconProps, "name">;

export const NavigationLine = (props: NavigationLineProps) => (
  <Icon name="navigation-line" {...props} />
);
