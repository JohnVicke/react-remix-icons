import React from "react";
import { Icon, IconProps } from "../Icon";

export type Search2FillProps = Omit<IconProps, "name">;

export const Search2Fill = (props: Search2FillProps) => (
  <Icon name="search-2-fill" {...props} />
);
