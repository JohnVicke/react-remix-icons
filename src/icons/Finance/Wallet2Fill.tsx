import React from "react";
import { Icon, IconProps } from "../Icon";

export type Wallet2FillProps = Omit<IconProps, "name">;

export const Wallet2Fill = (props: Wallet2FillProps) => (
  <Icon name="wallet-2-fill" {...props} />
);
