import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeSFillProps = Omit<IconProps, "name">;

export const CodeSFill = (props: CodeSFillProps) => (
  <Icon name="code-s-fill" {...props} />
);
