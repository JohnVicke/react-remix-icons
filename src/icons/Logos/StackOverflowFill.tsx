import React from "react";
import { Icon, IconProps } from "../Icon";

export type StackOverflowFillProps = Omit<IconProps, "name">;

export const StackOverflowFill = (props: StackOverflowFillProps) => (
  <Icon name="stack-overflow-fill" {...props} />
);
