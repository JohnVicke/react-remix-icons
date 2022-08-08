import React from "react";
import { Icon, IconProps } from "../Icon";

export type BillFillProps = Omit<IconProps, "name">;

export const BillFill = (props: BillFillProps) => (
  <Icon name="bill-fill" {...props} />
);
