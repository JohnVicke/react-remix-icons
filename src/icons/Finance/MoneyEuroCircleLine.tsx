import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyEuroCircleLineProps = Omit<IconProps, "name">;

export const MoneyEuroCircleLine = (props: MoneyEuroCircleLineProps) => (
  <Icon name="money-euro-circle-line" {...props} />
);
