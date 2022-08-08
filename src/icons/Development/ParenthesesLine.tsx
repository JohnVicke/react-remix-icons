import React from "react";
import { Icon, IconProps } from "../Icon";

export type ParenthesesLineProps = Omit<IconProps, "name">;

export const ParenthesesLine = (props: ParenthesesLineProps) => (
  <Icon name="parentheses-line" {...props} />
);
