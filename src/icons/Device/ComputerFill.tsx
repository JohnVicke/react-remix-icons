import React from "react";
import { Icon, IconProps } from "../Icon";

export type ComputerFillProps = Omit<IconProps, "name">;

export const ComputerFill = (props: ComputerFillProps) => (
  <Icon name="computer-fill" {...props} />
);
