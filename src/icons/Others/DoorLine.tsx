import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorLineProps = Omit<IconProps, "name">;

export const DoorLine = (props: DoorLineProps) => (
  <Icon name="door-line" {...props} />
);
