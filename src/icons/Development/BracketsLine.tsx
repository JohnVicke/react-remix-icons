import React from "react";
import { Icon, IconProps } from "../Icon";

export type BracketsLineProps = Omit<IconProps, "name">;

export const BracketsLine = (props: BracketsLineProps) => (
  <Icon name="brackets-line" {...props} />
);
