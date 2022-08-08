import React from "react";
import { Icon, IconProps } from "../Icon";

export type BankCardLineProps = Omit<IconProps, "name">;

export const BankCardLine = (props: BankCardLineProps) => (
  <Icon name="bank-card-line" {...props} />
);
