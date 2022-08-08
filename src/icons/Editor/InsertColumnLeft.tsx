import React from "react";
import { Icon, IconProps } from "../Icon";

export type InsertColumnLeftProps = Omit<IconProps, "name">;

export const InsertColumnLeft = (props: InsertColumnLeftProps) => (
  <Icon name="insert-column-left" {...props} />
);
