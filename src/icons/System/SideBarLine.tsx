import React from "react";
import { Icon, IconProps } from "../Icon";

export type SideBarLineProps = Omit<IconProps, "name">;

export const SideBarLine = (props: SideBarLineProps) => (
  <Icon name="side-bar-line" {...props} />
);
