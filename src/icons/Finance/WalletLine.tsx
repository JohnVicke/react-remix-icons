import React from "react";
import { Icon, IconProps } from "../Icon";

export type WalletLineProps = Omit<IconProps, "name">;

export const WalletLine = (props: WalletLineProps) => (
  <Icon name="wallet-line" {...props} />
);
