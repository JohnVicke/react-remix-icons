import React from "react";
import { Icon, IconProps } from "../Icon";

export type PagesFillProps = Omit<IconProps, "name">;

export const PagesFill = (props: PagesFillProps) => (
  <Icon name="pages-fill" {...props} />
);
