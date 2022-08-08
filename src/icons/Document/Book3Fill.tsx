import React from "react";
import { Icon, IconProps } from "../Icon";

export type Book3FillProps = Omit<IconProps, "name">;

export const Book3Fill = (props: Book3FillProps) => (
  <Icon name="book-3-fill" {...props} />
);
