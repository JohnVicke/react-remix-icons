import React from "react";
import { Icon, IconProps } from "../Icon";

export type BracesLineProps = Omit<IconProps, "name">;

export const BracesLine = (props: BracesLineProps) => (
  <Icon name="braces-line" {...props} />
);
