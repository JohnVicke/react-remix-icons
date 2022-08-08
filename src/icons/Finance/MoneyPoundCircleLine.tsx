import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyPoundCircleLineProps = Omit<IconProps, "name">;

export const MoneyPoundCircleLine = (props: MoneyPoundCircleLineProps) => (
  <Icon name="money-pound-circle-line" {...props} />
);
