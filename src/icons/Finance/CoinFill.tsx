import React from "react";
import { Icon, IconProps } from "../Icon";

export type CoinFillProps = Omit<IconProps, "name">;

export const CoinFill = (props: CoinFillProps) => (
  <Icon name="coin-fill" {...props} />
);
