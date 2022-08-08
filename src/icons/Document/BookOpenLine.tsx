import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookOpenLineProps = Omit<IconProps, "name">;

export const BookOpenLine = (props: BookOpenLineProps) => (
  <Icon name="book-open-line" {...props} />
);
