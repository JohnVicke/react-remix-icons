import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorFillProps = Omit<IconProps, "name">;

export const DoorFill = (props: DoorFillProps) => (
  <Icon name="door-fill" {...props} />
);
