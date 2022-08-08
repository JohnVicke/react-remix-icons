import React from "react";
import { Icon, IconProps } from "../Icon";

export type CurrencyFillProps = Omit<IconProps, "name">;

export const CurrencyFill = (props: CurrencyFillProps) => (
  <Icon name="currency-fill" {...props} />
);
