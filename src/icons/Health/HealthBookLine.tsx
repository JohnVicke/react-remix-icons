import React from "react";
import { Icon, IconProps } from "../Icon";

export type HealthBookLineProps = Omit<IconProps, "name">;

export const HealthBookLine = (props: HealthBookLineProps) => (
  <Icon name="health-book-line" {...props} />
);
