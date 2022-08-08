import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeDollarLineProps = Omit<IconProps, "name">;

export const ExchangeDollarLine = (props: ExchangeDollarLineProps) => (
  <Icon name="exchange-dollar-line" {...props} />
);
