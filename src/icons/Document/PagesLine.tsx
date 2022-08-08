import React from "react";
import { Icon, IconProps } from "../Icon";

export type PagesLineProps = Omit<IconProps, "name">;

export const PagesLine = (props: PagesLineProps) => (
  <Icon name="pages-line" {...props} />
);
