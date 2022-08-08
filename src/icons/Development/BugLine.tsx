import React from "react";
import { Icon, IconProps } from "../Icon";

export type BugLineProps = Omit<IconProps, "name">;

export const BugLine = (props: BugLineProps) => (
  <Icon name="bug-line" {...props} />
);
