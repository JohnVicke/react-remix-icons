import React from "react";
import { Icon, IconProps } from "../Icon";

export type ForbidLineProps = Omit<IconProps, "name">;

export const ForbidLine = (props: ForbidLineProps) => (
  <Icon name="forbid-line" {...props} />
);
