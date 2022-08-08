import React from "react";
import { Icon, IconProps } from "../Icon";

export type FunctionLineProps = Omit<IconProps, "name">;

export const FunctionLine = (props: FunctionLineProps) => (
  <Icon name="function-line" {...props} />
);
