import React from "react";
import { Icon, IconProps } from "../Icon";

export type SortDescProps = Omit<IconProps, "name">;

export const SortDesc = (props: SortDescProps) => (
  <Icon name="sort-desc" {...props} />
);
