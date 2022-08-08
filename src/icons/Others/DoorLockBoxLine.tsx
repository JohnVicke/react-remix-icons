import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorLockBoxLineProps = Omit<IconProps, "name">;

export const DoorLockBoxLine = (props: DoorLockBoxLineProps) => (
  <Icon name="door-lock-box-line" {...props} />
);
