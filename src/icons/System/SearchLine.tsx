import React from "react";
import { Icon, IconProps } from "../Icon";

export type SearchLineProps = Omit<IconProps, "name">;

export const SearchLine = (props: SearchLineProps) => (
  <Icon name="search-line" {...props} />
);
