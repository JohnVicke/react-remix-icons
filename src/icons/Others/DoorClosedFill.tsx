import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorClosedFillProps = Omit<IconProps, "name">;

export const DoorClosedFill = (props: DoorClosedFillProps) => (
  <Icon name="door-closed-fill" {...props} />
);
