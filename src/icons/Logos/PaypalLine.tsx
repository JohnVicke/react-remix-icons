import React from "react";
import { Icon, IconProps } from "../Icon";

export type PaypalLineProps = Omit<IconProps, "name">;

export const PaypalLine = (props: PaypalLineProps) => (
  <Icon name="paypal-line" {...props} />
);
