import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookmarkFillProps = Omit<IconProps, "name">;

export const BookmarkFill = (props: BookmarkFillProps) => (
  <Icon name="bookmark-fill" {...props} />
);
