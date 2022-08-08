import React from "react";
import { Icon, IconProps } from "../Icon";

export type CustomerServiceLineProps = Omit<IconProps, "name">;

export const CustomerServiceLine = (props: CustomerServiceLineProps) => (
  <Icon name="customer-service-line" {...props} />
);
