import React from "react";
import { Icon, IconProps } from "../Icon";

export type LockLineProps = Omit<IconProps, "name">;

export const LockLine = (props: LockLineProps) => (
  <Icon name="lock-line" {...props} />
);
