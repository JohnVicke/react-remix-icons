import React from "react";
import { Icon, IconProps } from "../Icon";

export type TerminalBoxFillProps = Omit<IconProps, "name">;

export const TerminalBoxFill = (props: TerminalBoxFillProps) => (
  <Icon name="terminal-box-fill" {...props} />
);
