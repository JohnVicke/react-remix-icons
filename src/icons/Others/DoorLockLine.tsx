import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorLockLineProps = Omit<IconProps, "name">;

export const DoorLockLine = (props: DoorLockLineProps) => (
  <Icon name="door-lock-line" {...props} />
);
