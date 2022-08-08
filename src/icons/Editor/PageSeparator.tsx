import React from "react";
import { Icon, IconProps } from "../Icon";

export type PageSeparatorProps = Omit<IconProps, "name">;

export const PageSeparator = (props: PageSeparatorProps) => (
  <Icon name="page-separator" {...props} />
);
