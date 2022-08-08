import React from "react";
import { Icon, IconProps } from "../Icon";

export type CodepenFillProps = Omit<IconProps, "name">;

export const CodepenFill = (props: CodepenFillProps) => (
  <Icon name="codepen-fill" {...props} />
);
