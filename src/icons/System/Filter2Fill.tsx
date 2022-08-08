import React from "react";
import { Icon, IconProps } from "../Icon";

export type Filter2FillProps = Omit<IconProps, "name">;

export const Filter2Fill = (props: Filter2FillProps) => (
  <Icon name="filter-2-fill" {...props} />
);
