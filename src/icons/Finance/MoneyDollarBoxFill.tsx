import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyDollarBoxFillProps = Omit<IconProps, "name">;

export const MoneyDollarBoxFill = (props: MoneyDollarBoxFillProps) => (
  <Icon name="money-dollar-box-fill" {...props} />
);
