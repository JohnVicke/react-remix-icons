import React from "react";
import { Icon, IconProps } from "../Icon";

export type GhostLineProps = Omit<IconProps, "name">;

export const GhostLine = (props: GhostLineProps) => (
  <Icon name="ghost-line" {...props} />
);
