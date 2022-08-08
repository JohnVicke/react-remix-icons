import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilterFillProps = Omit<IconProps, "name">;

export const FilterFill = (props: FilterFillProps) => (
  <Icon name="filter-fill" {...props} />
);
