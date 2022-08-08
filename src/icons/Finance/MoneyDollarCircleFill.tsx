import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyDollarCircleFillProps = Omit<IconProps, "name">;

export const MoneyDollarCircleFill = (props: MoneyDollarCircleFillProps) => (
  <Icon name="money-dollar-circle-fill" {...props} />
);
