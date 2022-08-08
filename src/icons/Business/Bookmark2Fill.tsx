import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bookmark2FillProps = Omit<IconProps, "name">;

export const Bookmark2Fill = (props: Bookmark2FillProps) => (
  <Icon name="bookmark-2-fill" {...props} />
);
