import React from "react";
import { Icon, IconProps } from "../Icon";

export type LockFillProps = Omit<IconProps, "name">;

export const LockFill = (props: LockFillProps) => (
  <Icon name="lock-fill" {...props} />
);
