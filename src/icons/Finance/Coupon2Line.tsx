import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon2LineProps = Omit<IconProps, "name">;

export const Coupon2Line = (props: Coupon2LineProps) => (
  <Icon name="coupon-2-line" {...props} />
);
