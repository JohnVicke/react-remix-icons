import React from "react";
import { Icon, IconProps } from "../Icon";

export type StackshareLineProps = Omit<IconProps, "name">;

export const StackshareLine = (props: StackshareLineProps) => (
  <Icon name="stackshare-line" {...props} />
);
