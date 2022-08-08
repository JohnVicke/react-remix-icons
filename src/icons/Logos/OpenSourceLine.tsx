import React from "react";
import { Icon, IconProps } from "../Icon";

export type OpenSourceLineProps = Omit<IconProps, "name">;

export const OpenSourceLine = (props: OpenSourceLineProps) => (
  <Icon name="open-source-line" {...props} />
);
