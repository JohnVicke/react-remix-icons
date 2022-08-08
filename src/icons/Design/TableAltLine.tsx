import React from "react";
import { Icon, IconProps } from "../Icon";

export type TableAltLineProps = Omit<IconProps, "name">;

export const TableAltLine = (props: TableAltLineProps) => (
  <Icon name="table-alt-line" {...props} />
);
