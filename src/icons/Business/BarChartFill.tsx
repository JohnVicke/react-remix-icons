import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartFillProps = Omit<IconProps, "name">;

export const BarChartFill = (props: BarChartFillProps) => (
  <Icon name="bar-chart-fill" {...props} />
);
