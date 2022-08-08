import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyPoundBoxLineProps = Omit<IconProps, "name">;

export const MoneyPoundBoxLine = (props: MoneyPoundBoxLineProps) => (
  <Icon name="money-pound-box-line" {...props} />
);
