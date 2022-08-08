import React from "react";
import { Icon, IconProps } from "../Icon";

export type TableFillProps = Omit<IconProps, "name">;

export const TableFill = (props: TableFillProps) => (
  <Icon name="table-fill" {...props} />
);
