import React from "react";
import { Icon, IconProps } from "../Icon";

export type BillLineProps = Omit<IconProps, "name">;

export const BillLine = (props: BillLineProps) => (
  <Icon name="bill-line" {...props} />
);
