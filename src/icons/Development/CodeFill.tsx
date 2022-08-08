import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeFillProps = Omit<IconProps, "name">;

export const CodeFill = (props: CodeFillProps) => (
  <Icon name="code-fill" {...props} />
);
