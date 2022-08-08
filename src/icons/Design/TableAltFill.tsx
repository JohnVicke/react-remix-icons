import React from "react";
import { Icon, IconProps } from "../Icon";

export type TableAltFillProps = Omit<IconProps, "name">;

export const TableAltFill = (props: TableAltFillProps) => (
  <Icon name="table-alt-fill" {...props} />
);
