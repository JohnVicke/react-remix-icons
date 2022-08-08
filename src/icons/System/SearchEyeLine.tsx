import React from "react";
import { Icon, IconProps } from "../Icon";

export type SearchEyeLineProps = Omit<IconProps, "name">;

export const SearchEyeLine = (props: SearchEyeLineProps) => (
  <Icon name="search-eye-line" {...props} />
);
