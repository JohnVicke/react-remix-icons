import React from "react";
import { Icon, IconProps } from "../Icon";

export type TerminalFillProps = Omit<IconProps, "name">;

export const TerminalFill = (props: TerminalFillProps) => (
  <Icon name="terminal-fill" {...props} />
);
