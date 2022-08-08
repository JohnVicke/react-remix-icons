import React from "react";
import { Icon, IconProps } from "../Icon";

export type UsbLineProps = Omit<IconProps, "name">;

export const UsbLine = (props: UsbLineProps) => (
  <Icon name="usb-line" {...props} />
);
