import React from "react";
import { Icon, IconProps } from "../Icon";

export type SearchEyeFillProps = Omit<IconProps, "name">;

export const SearchEyeFill = (props: SearchEyeFillProps) => (
  <Icon name="search-eye-fill" {...props} />
);
