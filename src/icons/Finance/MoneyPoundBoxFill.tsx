import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyPoundBoxFillProps = Omit<IconProps, "name">;

export const MoneyPoundBoxFill = (props: MoneyPoundBoxFillProps) => (
  <Icon name="money-pound-box-fill" {...props} />
);
