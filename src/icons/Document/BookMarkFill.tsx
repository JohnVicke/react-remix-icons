import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookMarkFillProps = Omit<IconProps, "name">;

export const BookMarkFill = (props: BookMarkFillProps) => (
  <Icon name="book-mark-fill" {...props} />
);
