import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeviceRecoverLineProps = Omit<IconProps, "name">;

export const DeviceRecoverLine = (props: DeviceRecoverLineProps) => (
  <Icon name="device-recover-line" {...props} />
);
