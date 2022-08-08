import React from "react";
import { Icon, IconProps } from "../Icon";

export type StackFillProps = Omit<IconProps, "name">;

export const StackFill = (props: StackFillProps) => (
  <Icon name="stack-fill" {...props} />
);
