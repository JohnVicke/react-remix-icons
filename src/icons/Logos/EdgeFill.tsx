import React from "react";
import { Icon, IconProps } from "../Icon";

export type EdgeFillProps = Omit<IconProps, "name">;

export const EdgeFill = (props: EdgeFillProps) => (
  <Icon name="edge-fill" {...props} />
);
