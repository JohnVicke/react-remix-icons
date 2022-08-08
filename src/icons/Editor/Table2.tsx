import React from "react";
import { Icon, IconProps } from "../Icon";

export type Table2Props = Omit<IconProps, "name">;

export const Table2 = (props: Table2Props) => (
  <Icon name="table-2" {...props} />
);
