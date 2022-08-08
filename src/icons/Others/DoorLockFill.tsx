import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorLockFillProps = Omit<IconProps, "name">;

export const DoorLockFill = (props: DoorLockFillProps) => (
  <Icon name="door-lock-fill" {...props} />
);
