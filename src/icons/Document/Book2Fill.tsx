import React from "react";
import { Icon, IconProps } from "../Icon";

export type Book2FillProps = Omit<IconProps, "name">;

export const Book2Fill = (props: Book2FillProps) => (
  <Icon name="book-2-fill" {...props} />
);
