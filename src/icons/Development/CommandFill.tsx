import React from "react";
import { Icon, IconProps } from "../Icon";

export type CommandFillProps = Omit<IconProps, "name">;

export const CommandFill = (props: CommandFillProps) => (
  <Icon name="command-fill" {...props} />
);
