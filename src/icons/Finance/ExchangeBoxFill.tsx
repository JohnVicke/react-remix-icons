import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeBoxFillProps = Omit<IconProps, "name">;

export const ExchangeBoxFill = (props: ExchangeBoxFillProps) => (
  <Icon name="exchange-box-fill" {...props} />
);
