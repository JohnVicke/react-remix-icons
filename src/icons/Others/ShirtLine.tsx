import React from "react";
import { Icon, IconProps } from "../Icon";

export type ShirtLineProps = Omit<IconProps, "name">;

export const ShirtLine = (props: ShirtLineProps) => (
  <Icon name="shirt-line" {...props} />
);
