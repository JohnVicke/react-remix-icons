import React from "react";
import { Icon, IconProps } from "../Icon";

export type TerminalLineProps = Omit<IconProps, "name">;

export const TerminalLine = (props: TerminalLineProps) => (
  <Icon name="terminal-line" {...props} />
);
