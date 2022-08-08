import React from "react";
import { Icon, IconProps } from "../Icon";

export type Coupon4LineProps = Omit<IconProps, "name">;

export const Coupon4Line = (props: Coupon4LineProps) => (
  <Icon name="coupon-4-line" {...props} />
);
