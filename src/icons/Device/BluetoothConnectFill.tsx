import React from "react";
import { Icon, IconProps } from "../Icon";

export type BluetoothConnectFillProps = Omit<IconProps, "name">;

export const BluetoothConnectFill = (props: BluetoothConnectFillProps) => (
  <Icon name="bluetooth-connect-fill" {...props} />
);
