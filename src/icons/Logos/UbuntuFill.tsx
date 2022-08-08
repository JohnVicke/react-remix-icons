import React from "react";
import { Icon, IconProps } from "../Icon";

export type UbuntuFillProps = Omit<IconProps, "name">;

export const UbuntuFill = (props: UbuntuFillProps) => (
  <Icon name="ubuntu-fill" {...props} />
);
