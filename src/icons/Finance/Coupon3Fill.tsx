import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon3FillProps = Omit<IconProps, "name">;

export const Coupon3Fill = (props: Coupon3FillProps) => (
  <Icon name="coupon-3-fill" {...props} />
);
