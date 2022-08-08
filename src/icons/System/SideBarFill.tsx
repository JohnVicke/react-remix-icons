import React from "react";
import { Icon, IconProps } from "../Icon";

export type SideBarFillProps = Omit<IconProps, "name">;

export const SideBarFill = (props: SideBarFillProps) => (
  <Icon name="side-bar-fill" {...props} />
);
