import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeFundsFillProps = Omit<IconProps, "name">;

export const ExchangeFundsFill = (props: ExchangeFundsFillProps) => (
  <Icon name="exchange-funds-fill" {...props} />
);
