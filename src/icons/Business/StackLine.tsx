import React from "react";
import { Icon, IconProps } from "../Icon";

export type StackLineProps = Omit<IconProps, "name">;

export const StackLine = (props: StackLineProps) => (
  <Icon name="stack-line" {...props} />
);
