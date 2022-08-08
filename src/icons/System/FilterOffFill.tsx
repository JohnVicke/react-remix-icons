import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilterOffFillProps = Omit<IconProps, "name">;

export const FilterOffFill = (props: FilterOffFillProps) => (
  <Icon name="filter-off-fill" {...props} />
);
