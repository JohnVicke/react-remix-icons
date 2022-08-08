import React from "react";
import { Icon, IconProps } from "../Icon";

export type CustomerServiceFillProps = Omit<IconProps, "name">;

export const CustomerServiceFill = (props: CustomerServiceFillProps) => (
  <Icon name="customer-service-fill" {...props} />
);
