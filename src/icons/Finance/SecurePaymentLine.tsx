import React from "react";
import { Icon, IconProps } from "../Icon";

export type SecurePaymentLineProps = Omit<IconProps, "name">;

export const SecurePaymentLine = (props: SecurePaymentLineProps) => (
  <Icon name="secure-payment-line" {...props} />
);
