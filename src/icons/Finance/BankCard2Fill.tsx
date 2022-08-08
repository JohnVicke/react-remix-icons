import React from "react";
import { Icon, IconProps } from "../Icon";

export type BankCard2FillProps = Omit<IconProps, "name">;

export const BankCard2Fill = (props: BankCard2FillProps) => (
  <Icon name="bank-card-2-fill" {...props} />
);
