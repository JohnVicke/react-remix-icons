import React from "react";
import { Icon, IconProps } from "../Icon";

export type ExchangeLineProps = Omit<IconProps, "name">;

export const ExchangeLine = (props: ExchangeLineProps) => (
  <Icon name="exchange-line" {...props} />
);
