import React from "react";
import { Icon, IconProps } from "../Icon";

export type Filter2LineProps = Omit<IconProps, "name">;

export const Filter2Line = (props: Filter2LineProps) => (
  <Icon name="filter-2-line" {...props} />
);
