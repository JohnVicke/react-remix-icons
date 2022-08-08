import React from "react";
import { Icon, IconProps } from "../Icon";

export type BookOpenFillProps = Omit<IconProps, "name">;

export const BookOpenFill = (props: BookOpenFillProps) => (
  <Icon name="book-open-fill" {...props} />
);
