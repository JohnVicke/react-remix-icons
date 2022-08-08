import React from "react";
import { Icon, IconProps } from "../Icon";

export type LungsLineProps = Omit<IconProps, "name">;

export const LungsLine = (props: LungsLineProps) => (
  <Icon name="lungs-line" {...props} />
);
