import React from "react";
import { Icon, IconProps } from "../Icon";

export type LockUnlockFillProps = Omit<IconProps, "name">;

export const LockUnlockFill = (props: LockUnlockFillProps) => (
  <Icon name="lock-unlock-fill" {...props} />
);
