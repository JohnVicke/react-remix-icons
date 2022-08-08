import React from "react";
import { Icon, IconProps } from "../Icon";

export type BluetoothConnectLineProps = Omit<IconProps, "name">;

export const BluetoothConnectLine = (props: BluetoothConnectLineProps) => (
  <Icon name="bluetooth-connect-line" {...props} />
);
