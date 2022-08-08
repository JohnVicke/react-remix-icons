import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyDollarCircleLineProps = Omit<IconProps, "name">;

export const MoneyDollarCircleLine = (props: MoneyDollarCircleLineProps) => (
  <Icon name="money-dollar-circle-line" {...props} />
);
