import React from "react";
import { Icon, IconProps } from "../Icon";

export type GhostFillProps = Omit<IconProps, "name">;

export const GhostFill = (props: GhostFillProps) => (
  <Icon name="ghost-fill" {...props} />
);
