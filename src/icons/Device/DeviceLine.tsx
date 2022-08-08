import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeviceLineProps = Omit<IconProps, "name">;

export const DeviceLine = (props: DeviceLineProps) => (
  <Icon name="device-line" {...props} />
);
