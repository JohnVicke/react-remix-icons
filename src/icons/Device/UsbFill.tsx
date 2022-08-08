import React from "react";
import { Icon, IconProps } from "../Icon";

export type UsbFillProps = Omit<IconProps, "name">;

export const UsbFill = (props: UsbFillProps) => (
  <Icon name="usb-fill" {...props} />
);
