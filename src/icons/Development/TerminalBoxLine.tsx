import React from "react";
import { Icon, IconProps } from "../Icon";

export type TerminalBoxLineProps = Omit<IconProps, "name">;

export const TerminalBoxLine = (props: TerminalBoxLineProps) => (
  <Icon name="terminal-box-line" {...props} />
);
