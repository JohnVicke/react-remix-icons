import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookMarkLineProps = Omit<IconProps, "name">;

export const BookMarkLine = (props: BookMarkLineProps) => (
  <Icon name="book-mark-line" {...props} />
);
