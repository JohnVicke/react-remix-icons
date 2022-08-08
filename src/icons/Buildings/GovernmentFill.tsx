import React from "react";
import { Icon, IconProps } from "../Icon";

export type GovernmentFillProps = Omit<IconProps, "name">;

export const GovernmentFill = (props: GovernmentFillProps) => (
  <Icon name="government-fill" {...props} />
);
