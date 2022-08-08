import React from "react";
import { Icon, IconProps } from "../Icon";

export type TerminalWindowFillProps = Omit<IconProps, "name">;

export const TerminalWindowFill = (props: TerminalWindowFillProps) => (
  <Icon name="terminal-window-fill" {...props} />
);
