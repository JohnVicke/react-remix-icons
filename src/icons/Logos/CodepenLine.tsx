import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodepenLineProps = Omit<IconProps, "name">;

export const CodepenLine = (props: CodepenLineProps) => (
  <Icon name="codepen-line" {...props} />
);
