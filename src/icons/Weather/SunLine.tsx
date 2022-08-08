import React from "react";
import { Icon, IconProps } from "../Icon";

export type SunLineProps = Omit<IconProps, "name">;

export const SunLine = (props: SunLineProps) => (
  <Icon name="sun-line" {...props} />
);
