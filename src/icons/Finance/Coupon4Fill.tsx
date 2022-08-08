import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon4FillProps = Omit<IconProps, "name">;

export const Coupon4Fill = (props: Coupon4FillProps) => (
  <Icon name="coupon-4-fill" {...props} />
);
