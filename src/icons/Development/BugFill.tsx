import React from "react";
import { Icon, IconProps } from "../Icon";

export type BugFillProps = Omit<IconProps, "name">;

export const BugFill = (props: BugFillProps) => (
  <Icon name="bug-fill" {...props} />
);
