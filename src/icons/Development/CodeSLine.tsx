import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeSLineProps = Omit<IconProps, "name">;

export const CodeSLine = (props: CodeSLineProps) => (
  <Icon name="code-s-line" {...props} />
);
