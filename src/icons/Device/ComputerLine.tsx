import React from "react";
import { Icon, IconProps } from "../Icon";

export type ComputerLineProps = Omit<IconProps, "name">;

export const ComputerLine = (props: ComputerLineProps) => (
  <Icon name="computer-line" {...props} />
);
