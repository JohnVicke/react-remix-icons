import React from "react";
import { Icon, IconProps } from "../Icon";

export type EdgeLineProps = Omit<IconProps, "name">;

export const EdgeLine = (props: EdgeLineProps) => (
  <Icon name="edge-line" {...props} />
);
