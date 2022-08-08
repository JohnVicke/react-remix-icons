import React from "react";
import { Icon, IconProps } from "../Icon";

export type Wallet3FillProps = Omit<IconProps, "name">;

export const Wallet3Fill = (props: Wallet3FillProps) => (
  <Icon name="wallet-3-fill" {...props} />
);
