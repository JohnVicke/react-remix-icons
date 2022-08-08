import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyDollarBoxLineProps = Omit<IconProps, "name">;

export const MoneyDollarBoxLine = (props: MoneyDollarBoxLineProps) => (
  <Icon name="money-dollar-box-line" {...props} />
);
