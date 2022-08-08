import React from "react";
import { Icon, IconProps } from "../Icon";

export type BankFillProps = Omit<IconProps, "name">;

export const BankFill = (props: BankFillProps) => (
  <Icon name="bank-fill" {...props} />
);
