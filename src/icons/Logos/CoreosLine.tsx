import React from "react";
import { Icon, IconProps } from "../Icon";

export type CoreosLineProps = Omit<IconProps, "name">;

export const CoreosLine = (props: CoreosLineProps) => (
  <Icon name="coreos-line" {...props} />
);
