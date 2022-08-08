import React from "react";
import { Icon, IconProps } from "../Icon";

export type SecurePaymentFillProps = Omit<IconProps, "name">;

export const SecurePaymentFill = (props: SecurePaymentFillProps) => (
  <Icon name="secure-payment-fill" {...props} />
);
