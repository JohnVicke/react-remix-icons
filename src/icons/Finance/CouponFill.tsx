import React from "react";
import { Icon, IconProps } from "../Icon";

export type CouponFillProps = Omit<IconProps, "name">;

export const CouponFill = (props: CouponFillProps) => (
  <Icon name="coupon-fill" {...props} />
);
