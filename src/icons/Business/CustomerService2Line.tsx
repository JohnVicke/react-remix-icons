import React from "react";
import { Icon, IconProps } from "../Icon";

export type CustomerService2LineProps = Omit<IconProps, "name">;

export const CustomerService2Line = (props: CustomerService2LineProps) => (
  <Icon name="customer-service-2-line" {...props} />
);
