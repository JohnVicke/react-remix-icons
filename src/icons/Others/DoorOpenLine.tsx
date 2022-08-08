import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorOpenLineProps = Omit<IconProps, "name">;

export const DoorOpenLine = (props: DoorOpenLineProps) => (
  <Icon name="door-open-line" {...props} />
);
