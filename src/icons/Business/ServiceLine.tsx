import React from "react";
import { Icon, IconProps } from "../Icon";

export type ServiceLineProps = Omit<IconProps, "name">;

export const ServiceLine = (props: ServiceLineProps) => (
  <Icon name="service-line" {...props} />
);
