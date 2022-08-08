import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeviceFillProps = Omit<IconProps, "name">;

export const DeviceFill = (props: DeviceFillProps) => (
  <Icon name="device-fill" {...props} />
);
