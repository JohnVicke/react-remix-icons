import React from "react";
import { Icon, IconProps } from "../Icon";

export type BankLineProps = Omit<IconProps, "name">;

export const BankLine = (props: BankLineProps) => (
  <Icon name="bank-line" {...props} />
);
