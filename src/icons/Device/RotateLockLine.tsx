import React from "react";
import { Icon, IconProps } from "../Icon";

export type RotateLockLineProps = Omit<IconProps, "name">;

export const RotateLockLine = (props: RotateLockLineProps) => (
  <Icon name="rotate-lock-line" {...props} />
);
