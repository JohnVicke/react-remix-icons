import React from "react";
import { Icon, IconProps } from "../Icon";

export type PlugFillProps = Omit<IconProps, "name">;

export const PlugFill = (props: PlugFillProps) => (
  <Icon name="plug-fill" {...props} />
);
