import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon3LineProps = Omit<IconProps, "name">;

export const Coupon3Line = (props: Coupon3LineProps) => (
  <Icon name="coupon-3-line" {...props} />
);
