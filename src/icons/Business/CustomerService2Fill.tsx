import React from "react";
import { Icon, IconProps } from "../Icon";

export type CustomerService2FillProps = Omit<IconProps, "name">;

export const CustomerService2Fill = (props: CustomerService2FillProps) => (
  <Icon name="customer-service-2-fill" {...props} />
);
