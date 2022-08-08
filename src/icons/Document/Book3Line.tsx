import React from "react";
import { Icon, IconProps } from "../Icon";

export type Book3LineProps = Omit<IconProps, "name">;

export const Book3Line = (props: Book3LineProps) => (
  <Icon name="book-3-line" {...props} />
);
