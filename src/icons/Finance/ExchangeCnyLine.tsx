import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeCnyLineProps = Omit<IconProps, "name">;

export const ExchangeCnyLine = (props: ExchangeCnyLineProps) => (
  <Icon name="exchange-cny-line" {...props} />
);
