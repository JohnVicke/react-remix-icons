import React from "react";
import { Icon, IconProps } from "../Icon";

export type InsertColumnRightProps = Omit<IconProps, "name">;

export const InsertColumnRight = (props: InsertColumnRightProps) => (
  <Icon name="insert-column-right" {...props} />
);
