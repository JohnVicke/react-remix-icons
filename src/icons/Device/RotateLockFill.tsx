import React from "react";
import { Icon, IconProps } from "../Icon";

export type RotateLockFillProps = Omit<IconProps, "name">;

export const RotateLockFill = (props: RotateLockFillProps) => (
  <Icon name="rotate-lock-fill" {...props} />
);
