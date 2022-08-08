import React from "react";
import { Icon, IconProps } from "../Icon";

export type HealthBookFillProps = Omit<IconProps, "name">;

export const HealthBookFill = (props: HealthBookFillProps) => (
  <Icon name="health-book-fill" {...props} />
);
