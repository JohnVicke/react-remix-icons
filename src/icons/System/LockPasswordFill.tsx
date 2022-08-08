import React from "react";
import { Icon, IconProps } from "../Icon";

export type LockPasswordFillProps = Omit<IconProps, "name">;

export const LockPasswordFill = (props: LockPasswordFillProps) => (
  <Icon name="lock-password-fill" {...props} />
);
