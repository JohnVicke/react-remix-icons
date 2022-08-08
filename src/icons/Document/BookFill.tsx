import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookFillProps = Omit<IconProps, "name">;

export const BookFill = (props: BookFillProps) => (
  <Icon name="book-fill" {...props} />
);
