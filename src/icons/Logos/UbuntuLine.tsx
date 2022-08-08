import React from "react";
import { Icon, IconProps } from "../Icon";

export type UbuntuLineProps = Omit<IconProps, "name">;

export const UbuntuLine = (props: UbuntuLineProps) => (
  <Icon name="ubuntu-line" {...props} />
);
