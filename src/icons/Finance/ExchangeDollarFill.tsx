import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeDollarFillProps = Omit<IconProps, "name">;

export const ExchangeDollarFill = (props: ExchangeDollarFillProps) => (
  <Icon name="exchange-dollar-fill" {...props} />
);
