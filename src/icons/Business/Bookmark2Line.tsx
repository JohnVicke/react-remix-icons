import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bookmark2LineProps = Omit<IconProps, "name">;

export const Bookmark2Line = (props: Bookmark2LineProps) => (
  <Icon name="bookmark-2-line" {...props} />
);
