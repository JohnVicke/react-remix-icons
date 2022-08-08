import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bookmark3LineProps = Omit<IconProps, "name">;

export const Bookmark3Line = (props: Bookmark3LineProps) => (
  <Icon name="bookmark-3-line" {...props} />
);
