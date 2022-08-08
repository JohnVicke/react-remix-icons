import React from "react";
import { Icon, IconProps } from "../Icon";

export type DatabaseFillProps = Omit<IconProps, "name">;

export const DatabaseFill = (props: DatabaseFillProps) => (
  <Icon name="database-fill" {...props} />
);
