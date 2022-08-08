import React from "react";
import { Icon, IconProps } from "../Icon";

export type BluetoothLineProps = Omit<IconProps, "name">;

export const BluetoothLine = (props: BluetoothLineProps) => (
  <Icon name="bluetooth-line" {...props} />
);
