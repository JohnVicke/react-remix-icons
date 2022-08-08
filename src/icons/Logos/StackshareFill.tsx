import React from "react";
import { Icon, IconProps } from "../Icon";

export type StackshareFillProps = Omit<IconProps, "name">;

export const StackshareFill = (props: StackshareFillProps) => (
  <Icon name="stackshare-fill" {...props} />
);
