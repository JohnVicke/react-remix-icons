import React from "react";
import { Icon, IconProps } from "../Icon";

export type CurrencyLineProps = Omit<IconProps, "name">;

export const CurrencyLine = (props: CurrencyLineProps) => (
  <Icon name="currency-line" {...props} />
);
