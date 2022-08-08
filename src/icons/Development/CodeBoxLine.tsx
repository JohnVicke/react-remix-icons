import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeBoxLineProps = Omit<IconProps, "name">;

export const CodeBoxLine = (props: CodeBoxLineProps) => (
  <Icon name="code-box-line" {...props} />
);
