import React from "react";
import { Icon, IconProps } from "../Icon";

export type SortAscProps = Omit<IconProps, "name">;

export const SortAsc = (props: SortAscProps) => (
  <Icon name="sort-asc" {...props} />
);
