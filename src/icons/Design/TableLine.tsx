import React from "react";
import { Icon, IconProps } from "../Icon";

export type TableLineProps = Omit<IconProps, "name">;

export const TableLine = (props: TableLineProps) => (
  <Icon name="table-line" {...props} />
);
