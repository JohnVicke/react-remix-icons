import React from "react";
import { Icon, IconProps } from "../Icon";

export type FunctionFillProps = Omit<IconProps, "name">;

export const FunctionFill = (props: FunctionFillProps) => (
  <Icon name="function-fill" {...props} />
);
