import React from "react";
import { Icon, IconProps } from "../Icon";

export type Filter3LineProps = Omit<IconProps, "name">;

export const Filter3Line = (props: Filter3LineProps) => (
  <Icon name="filter-3-line" {...props} />
);
