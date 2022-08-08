import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilterOffLineProps = Omit<IconProps, "name">;

export const FilterOffLine = (props: FilterOffLineProps) => (
  <Icon name="filter-off-line" {...props} />
);
