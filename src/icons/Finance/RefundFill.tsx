import React from "react";
import { Icon, IconProps } from "../Icon";

export type RefundFillProps = Omit<IconProps, "name">;

export const RefundFill = (props: RefundFillProps) => (
  <Icon name="refund-fill" {...props} />
);
