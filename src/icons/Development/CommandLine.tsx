import React from "react";
import { Icon, IconProps } from "../Icon";

export type CommandLineProps = Omit<IconProps, "name">;

export const CommandLine = (props: CommandLineProps) => (
  <Icon name="command-line" {...props} />
);
