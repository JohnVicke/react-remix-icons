import React from "react";
import { Icon, IconProps } from "../Icon";

export type BankCardFillProps = Omit<IconProps, "name">;

export const BankCardFill = (props: BankCardFillProps) => (
  <Icon name="bank-card-fill" {...props} />
);
