import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyEuroBoxFillProps = Omit<IconProps, "name">;

export const MoneyEuroBoxFill = (props: MoneyEuroBoxFillProps) => (
  <Icon name="money-euro-box-fill" {...props} />
);
