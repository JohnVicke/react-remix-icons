import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon5LineProps = Omit<IconProps, "name">;

export const Coupon5Line = (props: Coupon5LineProps) => (
  <Icon name="coupon-5-line" {...props} />
);
