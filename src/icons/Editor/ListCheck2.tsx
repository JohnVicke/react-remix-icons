import React from "react";
import { Icon, IconProps } from "../Icon";

export type ListCheck2Props = Omit<IconProps, "name">;

export const ListCheck2 = (props: ListCheck2Props) => (
  <Icon name="list-check-2" {...props} />
);
