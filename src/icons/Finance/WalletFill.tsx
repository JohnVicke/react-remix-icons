import React from "react";
import { Icon, IconProps } from "../Icon";

export type WalletFillProps = Omit<IconProps, "name">;

export const WalletFill = (props: WalletFillProps) => (
  <Icon name="wallet-fill" {...props} />
);
