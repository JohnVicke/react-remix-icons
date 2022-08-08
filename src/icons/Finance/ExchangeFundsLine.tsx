import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeFundsLineProps = Omit<IconProps, "name">;

export const ExchangeFundsLine = (props: ExchangeFundsLineProps) => (
  <Icon name="exchange-funds-line" {...props} />
);
