import React from "react";
import { Icon, IconProps } from "../Icon";

export type GroupLineProps = Omit<IconProps, "name">;

export const GroupLine = (props: GroupLineProps) => (
  <Icon name="group-line" {...props} />
);
