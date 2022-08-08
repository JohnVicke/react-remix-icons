import React from "react";
import { Icon, IconProps } from "../Icon";

export type RefundLineProps = Omit<IconProps, "name">;

export const RefundLine = (props: RefundLineProps) => (
  <Icon name="refund-line" {...props} />
);
