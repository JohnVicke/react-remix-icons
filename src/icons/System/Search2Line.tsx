import React from "react";
import { Icon, IconProps } from "../Icon";

export type Search2LineProps = Omit<IconProps, "name">;

export const Search2Line = (props: Search2LineProps) => (
  <Icon name="search-2-line" {...props} />
);
