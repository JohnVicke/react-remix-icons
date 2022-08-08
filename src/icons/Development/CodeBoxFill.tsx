import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeBoxFillProps = Omit<IconProps, "name">;

export const CodeBoxFill = (props: CodeBoxFillProps) => (
  <Icon name="code-box-fill" {...props} />
);
