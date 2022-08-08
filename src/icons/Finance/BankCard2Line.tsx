import React from "react";
import { Icon, IconProps } from "../Icon";

export type BankCard2LineProps = Omit<IconProps, "name">;

export const BankCard2Line = (props: BankCard2LineProps) => (
  <Icon name="bank-card-2-line" {...props} />
);
