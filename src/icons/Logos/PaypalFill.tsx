import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaypalFillProps = Omit<IconProps, "name">;

export const PaypalFill = (props: PaypalFillProps) => (
  <Icon name="paypal-fill" {...props} />
);
