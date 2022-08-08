import React from "react";
import { Icon, IconProps } from "../Icon";

export type LockPasswordLineProps = Omit<IconProps, "name">;

export const LockPasswordLine = (props: LockPasswordLineProps) => (
  <Icon name="lock-password-line" {...props} />
);
