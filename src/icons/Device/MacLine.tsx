import React from "react";
import { Icon, IconProps } from "../Icon";

export type MacLineProps = Omit<IconProps, "name">;

export const MacLine = (props: MacLineProps) => (
  <Icon name="mac-line" {...props} />
);
