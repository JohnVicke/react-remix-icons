import React from "react";
import { Icon, IconProps } from "../Icon";

export type ListCheckProps = Omit<IconProps, "name">;

export const ListCheck = (props: ListCheckProps) => (
  <Icon name="list-check" {...props} />
);
