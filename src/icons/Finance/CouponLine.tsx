import React from "react";
import { Icon, IconProps } from "../Icon";

export type CouponLineProps = Omit<IconProps, "name">;

export const CouponLine = (props: CouponLineProps) => (
  <Icon name="coupon-line" {...props} />
);
