import React from "react";
import { Icon, IconProps } from "../Icon";

export type DatabaseLineProps = Omit<IconProps, "name">;

export const DatabaseLine = (props: DatabaseLineProps) => (
  <Icon name="database-line" {...props} />
);
