import React from "react";
import { Icon, IconProps } from "../Icon";

export type InsertRowTopProps = Omit<IconProps, "name">;

export const InsertRowTop = (props: InsertRowTopProps) => (
  <Icon name="insert-row-top" {...props} />
);
