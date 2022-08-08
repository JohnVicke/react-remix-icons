import React from "react";
import { Icon, IconProps } from "../Icon";

export type DoorOpenFillProps = Omit<IconProps, "name">;

export const DoorOpenFill = (props: DoorOpenFillProps) => (
  <Icon name="door-open-fill" {...props} />
);
