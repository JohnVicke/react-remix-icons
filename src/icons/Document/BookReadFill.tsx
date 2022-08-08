import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookReadFillProps = Omit<IconProps, "name">;

export const BookReadFill = (props: BookReadFillProps) => (
  <Icon name="book-read-fill" {...props} />
);
