import React from "react";
import { Icon, IconProps } from "../Icon";

export type CoinsFillProps = Omit<IconProps, "name">;

export const CoinsFill = (props: CoinsFillProps) => (
  <Icon name="coins-fill" {...props} />
);
