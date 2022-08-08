import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorLockBoxFillProps = Omit<IconProps, "name">;

export const DoorLockBoxFill = (props: DoorLockBoxFillProps) => (
  <Icon name="door-lock-box-fill" {...props} />
);
