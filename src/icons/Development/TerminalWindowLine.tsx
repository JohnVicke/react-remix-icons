import React from "react";
import { Icon, IconProps } from "../Icon";

export type TerminalWindowLineProps = Omit<IconProps, "name">;

export const TerminalWindowLine = (props: TerminalWindowLineProps) => (
  <Icon name="terminal-window-line" {...props} />
);
