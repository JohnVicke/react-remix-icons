import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeSSlashFillProps = Omit<IconProps, "name">;

export const CodeSSlashFill = (props: CodeSSlashFillProps) => (
  <Icon name="code-s-slash-fill" {...props} />
);
