import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoneyPoundCircleFillProps = Omit<IconProps, "name">;

export const MoneyPoundCircleFill = (props: MoneyPoundCircleFillProps) => (
  <Icon name="money-pound-circle-fill" {...props} />
);
