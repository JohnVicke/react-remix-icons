import React from "react";
import { Icon, IconProps } from "../Icon";

export type UDiskLineProps = Omit<IconProps, "name">;

export const UDiskLine = (props: UDiskLineProps) => (
  <Icon name="u-disk-line" {...props} />
);
