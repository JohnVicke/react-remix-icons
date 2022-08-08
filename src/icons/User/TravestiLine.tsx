import React from "react";
import { Icon, IconProps } from "../Icon";

export type TravestiLineProps = Omit<IconProps, "name">;

export const TravestiLine = (props: TravestiLineProps) => (
  <Icon name="travesti-line" {...props} />
);
