import React from "react";
import { Icon, IconProps } from "../Icon";

export type SubtractLineProps = Omit<IconProps, "name">;

export const SubtractLine = (props: SubtractLineProps) => (
  <Icon name="subtract-line" {...props} />
);
