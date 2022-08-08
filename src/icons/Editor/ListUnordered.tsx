import React from "react";
import { Icon, IconProps } from "../Icon";

export type ListUnorderedProps = Omit<IconProps, "name">;

export const ListUnordered = (props: ListUnorderedProps) => (
  <Icon name="list-unordered" {...props} />
);
