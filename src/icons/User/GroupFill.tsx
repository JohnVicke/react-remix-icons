import React from "react";
import { Icon, IconProps } from "../Icon";

export type GroupFillProps = Omit<IconProps, "name">;

export const GroupFill = (props: GroupFillProps) => (
  <Icon name="group-fill" {...props} />
);
