import React from "react";
import { Icon, IconProps } from "../Icon";

export type SearchFillProps = Omit<IconProps, "name">;

export const SearchFill = (props: SearchFillProps) => (
  <Icon name="search-fill" {...props} />
);
