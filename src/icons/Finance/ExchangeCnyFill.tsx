import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeCnyFillProps = Omit<IconProps, "name">;

export const ExchangeCnyFill = (props: ExchangeCnyFillProps) => (
  <Icon name="exchange-cny-fill" {...props} />
);
