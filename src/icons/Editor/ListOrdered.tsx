import React from "react";
import { Icon, IconProps } from "../Icon";

export type ListOrderedProps = Omit<IconProps, "name">;

export const ListOrdered = (props: ListOrderedProps) => (
  <Icon name="list-ordered" {...props} />
);
