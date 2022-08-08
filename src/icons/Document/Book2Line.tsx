import React from "react";
import { Icon, IconProps } from "../Icon";

export type Book2LineProps = Omit<IconProps, "name">;

export const Book2Line = (props: Book2LineProps) => (
  <Icon name="book-2-line" {...props} />
);
