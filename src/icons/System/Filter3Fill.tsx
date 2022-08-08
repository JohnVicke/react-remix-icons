import React from "react";
import { Icon, IconProps } from "../Icon";

export type Filter3FillProps = Omit<IconProps, "name">;

export const Filter3Fill = (props: Filter3FillProps) => (
  <Icon name="filter-3-fill" {...props} />
);
