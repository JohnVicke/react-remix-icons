import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyEuroBoxLineProps = Omit<IconProps, "name">;

export const MoneyEuroBoxLine = (props: MoneyEuroBoxLineProps) => (
  <Icon name="money-euro-box-line" {...props} />
);
