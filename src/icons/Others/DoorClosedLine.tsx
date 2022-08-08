import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorClosedLineProps = Omit<IconProps, "name">;

export const DoorClosedLine = (props: DoorClosedLineProps) => (
  <Icon name="door-closed-line" {...props} />
);
