import React from "react";
import { Icon, IconProps } from "../Icon";

export type BarChartLineProps = Omit<IconProps, "name">;

export const BarChartLine = (props: BarChartLineProps) => (
  <Icon name="bar-chart-line" {...props} />
);
