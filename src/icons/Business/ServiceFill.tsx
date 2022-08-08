import React from "react";
import { Icon, IconProps } from "../Icon";

export type ServiceFillProps = Omit<IconProps, "name">;

export const ServiceFill = (props: ServiceFillProps) => (
  <Icon name="service-fill" {...props} />
);
