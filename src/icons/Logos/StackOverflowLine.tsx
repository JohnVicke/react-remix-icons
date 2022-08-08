import React from "react";
import { Icon, IconProps } from "../Icon";

export type StackOverflowLineProps = Omit<IconProps, "name">;

export const StackOverflowLine = (props: StackOverflowLineProps) => (
  <Icon name="stack-overflow-line" {...props} />
);
