import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookmarkLineProps = Omit<IconProps, "name">;

export const BookmarkLine = (props: BookmarkLineProps) => (
  <Icon name="bookmark-line" {...props} />
);
