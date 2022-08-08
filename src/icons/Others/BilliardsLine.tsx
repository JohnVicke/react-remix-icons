import React from "react";
import { Icon, IconProps } from "../Icon";

export type BilliardsLineProps = Omit<IconProps, "name">;

export const BilliardsLine = (props: BilliardsLineProps) => (
  <Icon name="billiards-line" {...props} />
);
