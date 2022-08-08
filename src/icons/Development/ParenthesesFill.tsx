import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParenthesesFillProps = Omit<IconProps, "name">;

export const ParenthesesFill = (props: ParenthesesFillProps) => (
  <Icon name="parentheses-fill" {...props} />
);
