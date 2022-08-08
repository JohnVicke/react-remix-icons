import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon5FillProps = Omit<IconProps, "name">;

export const Coupon5Fill = (props: Coupon5FillProps) => (
  <Icon name="coupon-5-fill" {...props} />
);
