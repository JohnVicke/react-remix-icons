import React from "react";
import { Icon, IconProps } from "../Icon";

export type RewindLineProps = Omit<IconProps, "name">;

export const RewindLine = (props: RewindLineProps) => (
  <Icon name="rewind-line" {...props} />
);
