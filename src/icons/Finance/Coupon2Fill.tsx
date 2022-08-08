import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon2FillProps = Omit<IconProps, "name">;

export const Coupon2Fill = (props: Coupon2FillProps) => (
  <Icon name="coupon-2-fill" {...props} />
);
