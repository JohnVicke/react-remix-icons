import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodeViewProps = Omit<IconProps, "name">;

export const CodeView = (props: CodeViewProps) => (
  <Icon name="code-view" {...props} />
);
