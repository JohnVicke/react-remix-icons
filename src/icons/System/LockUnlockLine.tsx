import React from "react";
import { Icon, IconProps } from "../Icon";

export type LockUnlockLineProps = Omit<IconProps, "name">;

export const LockUnlockLine = (props: LockUnlockLineProps) => (
  <Icon name="lock-unlock-line" {...props} />
);
