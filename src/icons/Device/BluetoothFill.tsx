import React from "react";
import { Icon, IconProps } from "../Icon";

export type BluetoothFillProps = Omit<IconProps, "name">;

export const BluetoothFill = (props: BluetoothFillProps) => (
  <Icon name="bluetooth-fill" {...props} />
);
