import React from "react";
import { Icon, IconProps } from "../Icon";

export type CoinLineProps = Omit<IconProps, "name">;

export const CoinLine = (props: CoinLineProps) => (
  <Icon name="coin-line" {...props} />
);
