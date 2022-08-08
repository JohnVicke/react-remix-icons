import React from "react";
import { Icon, IconProps } from "../Icon";

export type Wallet3LineProps = Omit<IconProps, "name">;

export const Wallet3Line = (props: Wallet3LineProps) => (
  <Icon name="wallet-3-line" {...props} />
);
