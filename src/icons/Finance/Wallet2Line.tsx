import React from "react";
import { Icon, IconProps } from "../Icon";

export type Wallet2LineProps = Omit<IconProps, "name">;

export const Wallet2Line = (props: Wallet2LineProps) => (
  <Icon name="wallet-2-line" {...props} />
);
