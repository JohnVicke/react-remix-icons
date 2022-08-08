import React from "react";
import { Icon, IconProps } from "../Icon";

export type UDiskFillProps = Omit<IconProps, "name">;

export const UDiskFill = (props: UDiskFillProps) => (
  <Icon name="u-disk-fill" {...props} />
);
