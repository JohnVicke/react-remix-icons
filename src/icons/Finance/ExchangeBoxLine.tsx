import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeBoxLineProps = Omit<IconProps, "name">;

export const ExchangeBoxLine = (props: ExchangeBoxLineProps) => (
  <Icon name="exchange-box-line" {...props} />
);
