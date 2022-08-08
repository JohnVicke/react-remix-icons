import React from "react";
import { Icon, IconProps } from "../Icon";

export type FilterLineProps = Omit<IconProps, "name">;

export const FilterLine = (props: FilterLineProps) => (
  <Icon name="filter-line" {...props} />
);
