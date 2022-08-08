import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookReadLineProps = Omit<IconProps, "name">;

export const BookReadLine = (props: BookReadLineProps) => (
  <Icon name="book-read-line" {...props} />
);
