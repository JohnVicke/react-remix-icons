import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeSSlashLineProps = Omit<IconProps, "name">;

export const CodeSSlashLine = (props: CodeSSlashLineProps) => (
  <Icon name="code-s-slash-line" {...props} />
);
