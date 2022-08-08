import React from "react";
import { Icon, IconProps } from "../Icon";

export type GovernmentLineProps = Omit<IconProps, "name">;

export const GovernmentLine = (props: GovernmentLineProps) => (
  <Icon name="government-line" {...props} />
);
