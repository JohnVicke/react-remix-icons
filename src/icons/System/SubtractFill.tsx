import React from "react";
import { Icon, IconProps } from "../Icon";

export type SubtractFillProps = Omit<IconProps, "name">;

export const SubtractFill = (props: SubtractFillProps) => (
  <Icon name="subtract-fill" {...props} />
);
