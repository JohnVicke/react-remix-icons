import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParentFillProps = Omit<IconProps, "name">;

export const ParentFill = (props: ParentFillProps) => (
  <Icon name="parent-fill" {...props} />
);
