import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookLineProps = Omit<IconProps, "name">;

export const BookLine = (props: BookLineProps) => (
  <Icon name="book-line" {...props} />
);
