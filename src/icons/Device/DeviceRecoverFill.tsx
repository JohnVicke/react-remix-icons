import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeviceRecoverFillProps = Omit<IconProps, "name">;

export const DeviceRecoverFill = (props: DeviceRecoverFillProps) => (
  <Icon name="device-recover-fill" {...props} />
);
