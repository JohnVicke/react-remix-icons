import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyEuroCircleFillProps = Omit<IconProps, "name">;

export const MoneyEuroCircleFill = (props: MoneyEuroCircleFillProps) => (
  <Icon name="money-euro-circle-fill" {...props} />
);
