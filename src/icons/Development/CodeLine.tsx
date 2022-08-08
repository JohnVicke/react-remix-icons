import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeLineProps = Omit<IconProps, "name">;

export const CodeLine = (props: CodeLineProps) => (
  <Icon name="code-line" {...props} />
);
