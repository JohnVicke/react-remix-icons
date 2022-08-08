import React from "react";
import { Icon, IconProps } from "../Icon";

export type InsertRowBottomProps = Omit<IconProps, "name">;

export const InsertRowBottom = (props: InsertRowBottomProps) => (
  <Icon name="insert-row-bottom" {...props} />
);
