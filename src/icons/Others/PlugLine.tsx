import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlugLineProps = Omit<IconProps, "name">;

export const PlugLine = (props: PlugLineProps) => (
  <Icon name="plug-line" {...props} />
);
